import os
import io
import boto3
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.http import MediaIoBaseDownload
from PIL import Image  # For image conversion

# Configurations
GDRIVE_FOLDER_ID = os.getenv("GDRIVE_FOLDER_ID")  # Google Drive Folder ID
GOOGLE_CREDENTIALS_JSON = os.getenv("GOOGLE_CREDENTIALS_JSON")  # Path to Service Account JSON file or JSON string
AWS_ACCESS_KEY_ID = os.getenv("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = os.getenv("AWS_SECRET_ACCESS_KEY")
S3_BUCKET_NAME = os.getenv("S3_BUCKET_NAME")  # Your S3 bucket name
S3_UPLOAD_PATH = os.getenv("S3_UPLOAD_PATH", "isaac-s3-images/")  # Destination folder in S3 (empty means root)

# Authenticate with Google Drive
def authenticate_google_drive(credentials_json):
    if os.path.isfile(credentials_json):
        credentials = service_account.Credentials.from_service_account_file(
            credentials_json, scopes=["https://www.googleapis.com/auth/drive.readonly"]
        )
    else:
        credentials = service_account.Credentials.from_service_account_info(
            eval(credentials_json), scopes=["https://www.googleapis.com/auth/drive.readonly"]
        )
    return build("drive", "v3", credentials=credentials)

# Recursively download image files from Google Drive
def download_images_from_drive(service, folder_id, download_path):
    os.makedirs(download_path, exist_ok=True)

    # List all files and folders inside the current folder
    results = service.files().list(
        q=f"'{folder_id}' in parents and trashed=false",
        fields="files(id, name, mimeType)"
    ).execute()

    files = results.get("files", [])

    for file in files:
        file_id = file["id"]
        file_name = file["name"]
        mime_type = file["mimeType"]
        file_path = os.path.join(download_path, file_name)

        if mime_type == "application/vnd.google-apps.folder":
            # If it's a folder, recurse into it
            print(f"Found folder: {file_name}, entering...")
            download_images_from_drive(service, file_id, os.path.join(download_path, file_name))
        elif mime_type.startswith("image/"):
            # If it's an image, download it
            print(f"Downloading image: {file_name}...")
            request = service.files().get_media(fileId=file_id)
            fh = io.FileIO(file_path, "wb")
            downloader = MediaIoBaseDownload(fh, request)
            done = False
            while not done:
                status, done = downloader.next_chunk()
                print(f"Download progress: {int(status.progress() * 100)}%")
        else:
            # Skip non-image files
            print(f"Skipping non-image file: {file_name} (type: {mime_type})")

    print(f"Completed downloading images from folder: {folder_id}")

# Convert .jpg_ files to .jpg format
def convert_jpg_underscore_to_jpg(folder_path):
    for root, _, files in os.walk(folder_path):
        for file in files:
            if file.endswith(".jpg_"):
                old_file_path = os.path.join(root, file)
                new_file_path = os.path.join(root, file[:-1])  # Remove the trailing underscore
                print(f"Converting {old_file_path} to {new_file_path}...")
                try:
                    # Open the image and save it in .jpg format
                    with Image.open(old_file_path) as img:
                        img.save(new_file_path, "JPEG")
                    # Remove the old file
                    os.remove(old_file_path)
                except Exception as e:
                    print(f"Failed to convert {old_file_path}: {e}")

# Upload images to S3, preserving directory structure
def upload_to_s3(local_folder, bucket_name, s3_upload_path, aws_access_key_id, aws_secret_access_key):
    s3_client = boto3.client(
        "s3",
        aws_access_key_id=aws_access_key_id,
        aws_secret_access_key=aws_secret_access_key,
    )

    for root, _, files in os.walk(local_folder):
        for file in files:
            local_path = os.path.join(root, file)
            relative_path = os.path.relpath(local_path, local_folder)  # Relative path inside the folder
            s3_key = os.path.join(s3_upload_path, relative_path)  # S3 path to upload to

            print(f"Uploading {local_path} to s3://{bucket_name}/{s3_key}...")
            s3_client.upload_file(local_path, bucket_name, s3_key)

    print("All images uploaded successfully!")

# Main script
if __name__ == "__main__":
    # Define download folder
    DOWNLOAD_FOLDER = "downloads"
    BACKUP_FOLDER = "backup"

    try:
        # Authenticate and download images from Google Drive
        drive_service = authenticate_google_drive(GOOGLE_CREDENTIALS_JSON)
        download_images_from_drive(drive_service, GDRIVE_FOLDER_ID, DOWNLOAD_FOLDER)

        # Convert .jpg_ files to .jpg
        convert_jpg_underscore_to_jpg(DOWNLOAD_FOLDER)

        # Upload to S3
        upload_to_s3(DOWNLOAD_FOLDER, S3_BUCKET_NAME, S3_UPLOAD_PATH, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY)

        # Rename the folder to backup and upload it
        os.rename(DOWNLOAD_FOLDER, BACKUP_FOLDER)
        print(f"Renamed {DOWNLOAD_FOLDER} to {BACKUP_FOLDER} for backup.")
        upload_to_s3(BACKUP_FOLDER, S3_BUCKET_NAME, S3_UPLOAD_PATH, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY)

        # Delete the backup folder after successful upload
        for root, dirs, files in os.walk(BACKUP_FOLDER, topdown=False):
            for name in files:
                os.remove(os.path.join(root, name))
            for name in dirs:
                os.rmdir(os.path.join(root, name))
        os.rmdir(BACKUP_FOLDER)
        print(f"Deleted backup folder: {BACKUP_FOLDER}")

    except Exception as e:
        print(f"An error occurred: {e}")
        # If any step fails, the original folder is retained for debugging
        if os.path.exists(BACKUP_FOLDER):
            os.rename(BACKUP_FOLDER, DOWNLOAD_FOLDER)
            print(f"Restored {BACKUP_FOLDER} to {DOWNLOAD_FOLDER} due to failure.")