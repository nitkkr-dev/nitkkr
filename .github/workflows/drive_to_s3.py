import os
import io
import boto3
import mimetypes
import json
import hashlib
from datetime import datetime
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.http import MediaIoBaseDownload

# Configurations
GDRIVE_FOLDER_ID = os.getenv("GDRIVE_FOLDER_ID")  # Google Drive Folder ID
GOOGLE_CREDENTIALS_JSON = os.getenv("GOOGLE_CREDENTIALS_JSON")  # Path to Service Account JSON file or JSON string
AWS_ACCESS_KEY_ID = os.getenv("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = os.getenv("AWS_SECRET_ACCESS_KEY")
S3_BUCKET_NAME = os.getenv("S3_BUCKET_NAME")  # Your S3 bucket name
S3_UPLOAD_PATH = os.getenv("S3_UPLOAD_PATH")  # Destination folder in S3 (empty means root)
INDEX_FILE = "drive_index.json"  # Index file to track synced files

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

# Index Management Functions
def load_index():
    """Load the index file or create a new one if it doesn't exist."""
    if os.path.exists(INDEX_FILE):
        try:
            with open(INDEX_FILE, 'r') as f:
                index_data = json.load(f)
                print(f"Loaded existing index with {len(index_data)} files")
                return index_data
        except (json.JSONDecodeError, IOError) as e:
            print(f"Error loading index file: {e}. Creating new index.")
            return {}
    else:
        print("No existing index file found. Creating new index.")
        return {}

def save_index(index_data):
    """Save the index file with current data."""
    try:
        with open(INDEX_FILE, 'w') as f:
            json.dump(index_data, f, indent=2, sort_keys=True)
        print(f"Index saved with {len(index_data)} files")
    except IOError as e:
        print(f"Error saving index file: {e}")

def get_file_checksum(file_path):
    """Generate MD5 checksum for a local file."""
    if not os.path.exists(file_path):
        return None
    
    hash_md5 = hashlib.md5()
    try:
        with open(file_path, "rb") as f:
            for chunk in iter(lambda: f.read(4096), b""):
                hash_md5.update(chunk)
        return hash_md5.hexdigest()
    except IOError:
        return None

def create_file_index_entry(file_info, local_path=None):
    """Create an index entry for a file with all relevant metadata."""
    checksum = get_file_checksum(local_path) if local_path else None
    
    return {
        "id": file_info["id"],
        "name": file_info["name"],
        "mimeType": file_info["mimeType"],
        "modifiedTime": file_info.get("modifiedTime"),
        "size": file_info.get("size"),
        "md5Checksum": file_info.get("md5Checksum"),  # Drive's checksum
        "localChecksum": checksum,  # Local file checksum
        "lastSynced": datetime.now().isoformat(),
        "syncStatus": "synced"
    }

def should_download_file(file_info, index):
    """Determine if a file should be downloaded based on index comparison."""
    file_id = file_info["id"]
    
    # File not in index - download
    if file_id not in index:
        return True, "new_file"
    
    existing_entry = index[file_id]
    
    # Check modification time
    if file_info.get("modifiedTime") != existing_entry.get("modifiedTime"):
        return True, "modified_time"
    
    # Check Drive MD5 checksum if available
    if (file_info.get("md5Checksum") and 
        file_info.get("md5Checksum") != existing_entry.get("md5Checksum")):
        return True, "drive_checksum_changed"
    
    # Check file size
    if file_info.get("size") != existing_entry.get("size"):
        return True, "size_changed"
    
    # Check sync status
    if existing_entry.get("syncStatus") != "synced":
        return True, "sync_incomplete"
    
    return False, "up_to_date"

# Recursively download files from Google Drive with indexing
def download_files_from_drive(service, folder_id, download_path, index=None, downloaded_files=None):
    """Download files from Google Drive using indexing to avoid unnecessary downloads."""
    os.makedirs(download_path, exist_ok=True)
    
    if index is None:
        index = load_index()
    if downloaded_files is None:
        downloaded_files = []

    # List all files and folders with extended metadata for indexing
    results = service.files().list(
        q=f"'{folder_id}' in parents and trashed=false",
        fields="files(id, name, mimeType, modifiedTime, size, md5Checksum)"
    ).execute()

    files = results.get("files", [])
    files_processed = 0
    files_skipped = 0

    for file in files:
        file_id = file["id"]
        file_name = file["name"]
        mime_type = file["mimeType"]

        # Fix for .jpg+ issue: Ensure the file extension is correct
        original_name = file_name
        if file_name.endswith(".jpg+"):
            file_name = file_name[:-1]  # Remove the trailing '+' to make it .jpg

        file_path = os.path.join(download_path, file_name)

        if mime_type == "application/vnd.google-apps.folder":
            # If it's a folder, recurse into it
            print(f"Found folder: {file_name}, entering...")
            folder_downloaded, folder_skipped = download_files_from_drive(
                service, file_id, os.path.join(download_path, file_name), index, downloaded_files
            )
            files_processed += folder_downloaded
            files_skipped += folder_skipped
            
        elif mime_type.startswith("image/") or mime_type == "application/pdf":
            # Check if file needs to be downloaded
            should_download, reason = should_download_file(file, index)
            
            if should_download:
                print(f"Downloading file: {file_name} (type: {mime_type}) - Reason: {reason}")
                try:
                    request = service.files().get_media(fileId=file_id)
                    fh = io.FileIO(file_path, "wb")
                    downloader = MediaIoBaseDownload(fh, request)
                    done = False
                    while not done:
                        status, done = downloader.next_chunk()
                        print(f"Download progress: {int(status.progress() * 100)}%")
                    
                    # Create index entry for the downloaded file
                    index_entry = create_file_index_entry(file, file_path)
                    index[file_id] = index_entry
                    downloaded_files.append(file_name)
                    files_processed += 1
                    
                    print(f"Successfully downloaded and indexed: {file_name}")
                    
                except Exception as e:
                    print(f"Failed to download {file_name}: {e}")
                    # Mark as failed in index
                    index_entry = create_file_index_entry(file)
                    index_entry["syncStatus"] = "failed"
                    index_entry["error"] = str(e)
                    index[file_id] = index_entry
            else:
                print(f"Skipping unchanged file: {file_name} - Reason: {reason}")
                files_skipped += 1
        else:
            # Skip unsupported files but still index them for tracking
            print(f"Skipping unsupported file: {file_name} (type: {mime_type})")
            index_entry = create_file_index_entry(file)
            index_entry["syncStatus"] = "skipped_unsupported"
            index[file_id] = index_entry

    print(f"Completed folder: {folder_id} - Downloaded: {files_processed}, Skipped: {files_skipped}")
    return files_processed, files_skipped

# Rename .jpg_ files to .jpg
def rename_jpg_underscore_to_jpg(folder_path):
    for root, _, files in os.walk(folder_path):
        for file in files:
            if file.endswith(".jpg_"):
                old_file_path = os.path.join(root, file)
                new_file_path = os.path.join(root, file[:-1])  # Remove the trailing underscore
                print(f"Renaming {old_file_path} to {new_file_path}...")
                try:
                    os.rename(old_file_path, new_file_path)
                except Exception as e:
                    print(f"Failed to rename {old_file_path}: {e}")

# Upload files to S3, preserving directory structure (selective upload)
def upload_to_s3_selective(local_folder, bucket_name, s3_upload_path, aws_access_key_id, aws_secret_access_key, downloaded_files):
    """Upload only files that were downloaded/updated to S3."""
    if not downloaded_files:
        print("No files to upload to S3.")
        return
    
    s3_client = boto3.client(
        "s3",
        aws_access_key_id=aws_access_key_id,
        aws_secret_access_key=aws_secret_access_key,
    )

    uploaded_count = 0
    
    for root, _, files in os.walk(local_folder):
        for file in files:
            # Only upload files that were downloaded/updated
            if file in downloaded_files:
                local_path = os.path.join(root, file)
                relative_path = os.path.relpath(local_path, local_folder)
                s3_key = os.path.join(s3_upload_path, relative_path)

                # Guess the MIME type of the file
                content_type, _ = mimetypes.guess_type(local_path)
                if not content_type:
                    content_type = "binary/octet-stream"

                print(f"Uploading {local_path} to s3://{bucket_name}/{s3_key} with ContentType={content_type}...")
                try:
                    s3_client.upload_file(
                        local_path,
                        bucket_name,
                        s3_key,
                        ExtraArgs={"ContentType": content_type},
                    )
                    uploaded_count += 1
                    print(f"Successfully uploaded: {file}")
                except Exception as e:
                    print(f"Failed to upload {file}: {e}")
            else:
                print(f"Skipping upload for unchanged file: {file}")

    print(f"Uploaded {uploaded_count} files to S3 successfully!")

# Main script
if __name__ == "__main__":
    # Define download folder
    DOWNLOAD_FOLDER = "downloads"
    
    try:
        # Load existing index or create new one
        index = load_index()
        downloaded_files = []
        
        # Authenticate and download files from Google Drive
        drive_service = authenticate_google_drive(GOOGLE_CREDENTIALS_JSON)
        
        print("Starting Drive to S3 sync with indexing...")
        files_downloaded, files_skipped = download_files_from_drive(
            drive_service, GDRIVE_FOLDER_ID, DOWNLOAD_FOLDER, index, downloaded_files
        )
        
        # Save updated index after download phase
        save_index(index)
        
        print(f"\nSync Summary:")
        print(f"Files downloaded/updated: {files_downloaded}")
        print(f"Files skipped (unchanged): {files_skipped}")
        print(f"Total files in index: {len(index)}")
        
        # Only proceed with remaining operations if there were downloads
        if downloaded_files:
            print(f"\nProcessing {len(downloaded_files)} new/updated files...")
            
            # Rename .jpg_ files to .jpg
            rename_jpg_underscore_to_jpg(DOWNLOAD_FOLDER)
            
            # Upload only the downloaded files to S3
            upload_to_s3_selective(DOWNLOAD_FOLDER, S3_BUCKET_NAME, S3_UPLOAD_PATH, 
                                 AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, downloaded_files)
            
            print("\nSync completed successfully!")
            
            # Clean up downloaded files to save space (optional)
            # for root, dirs, files in os.walk(DOWNLOAD_FOLDER, topdown=False):
            #     for name in files:
            #         if name in downloaded_files:
            #             os.remove(os.path.join(root, name))
            #     for name in dirs:
            #         try:
            #             os.rmdir(os.path.join(root, name))
            #         except OSError:
            #             pass  # Directory not empty
            
        else:
            print("\nNo changes detected. Sync skipped.")
            
    except Exception as e:
        print(f"An error occurred: {e}")
        # Save index even if there was an error
        try:
            if 'index' in locals():
                save_index(index)
                print("Index saved despite error for debugging.")
        except:
            pass