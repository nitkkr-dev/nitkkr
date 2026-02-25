'use server';

import { uploadFileToS3 } from '~/server/s3/upload';
import { buildObjectUrl } from '~/server/s3';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB default

interface UploadMediaOptions {
  allowedTypes?: string[];
  maxFileSize?: number;
}

const DEFAULT_OPTIONS: UploadMediaOptions = {
  // Can update this list as needed
  allowedTypes: ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'],
  maxFileSize: MAX_FILE_SIZE,
};

export async function uploadMedia(
  formData: FormData,
  s3Path: string,
  options: UploadMediaOptions = {}
) {
  const { allowedTypes, maxFileSize } = { ...DEFAULT_OPTIONS, ...options };

  try {
    const file = formData.get('file') as File;

    if (!file) {
      return { success: false, message: 'No file provided' };
    }

    // Validate file type
    if (allowedTypes && !allowedTypes.includes(file.type)) {
      return {
        success: false,
        message: `Invalid file type. Allowed types: ${allowedTypes.join(', ')}`,
      };
    }

    // Validate file size
    if (maxFileSize && file.size > maxFileSize) {
      const maxSizeMB = Math.round(maxFileSize / (1024 * 1024));
      return {
        success: false,
        message: `File too large. Maximum size is ${maxSizeMB}MB.`,
      };
    }

    // Upload to S3
    await uploadFileToS3(file, s3Path);

    // Construct the public URL using the storage provider
    const publicUrl = buildObjectUrl(s3Path);

    return {
      success: true,
      message: 'File uploaded successfully',
      url: publicUrl,
      path: s3Path,
    };
  } catch (error) {
    console.error('Error uploading media:', error);
    return {
      success: false,
      message: 'Failed to upload file. Please try again.',
    };
  }
}
