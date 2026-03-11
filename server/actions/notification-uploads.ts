'use server';

import { uploadFileToS3 } from '~/server/s3/upload';
import { buildObjectUrl } from '~/server/s3';
import { canManageNotifications, getHodDepartmentId, getServerAuthSession } from '~/server/auth';

// ─── Constants ───────────────────────────────────────────────────────

const MAX_MEDIA_SIZE = 50 * 1024 * 1024; // 50MB
const MAX_DOCUMENT_SIZE = 100 * 1024 * 1024; // 100MB

const ALLOWED_MEDIA_TYPES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
  'video/mp4',
  'video/webm',
];

const ALLOWED_DOCUMENT_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
];

// ─── Helpers ─────────────────────────────────────────────────────────

function generateUniqueKey(prefix: string, filename: string): string {
  const timestamp = Date.now();
  const randomStr = Math.random().toString(36).substring(2, 10);
  const sanitised = filename.replace(/[^a-zA-Z0-9._-]/g, '_');
  return `isaac-s3-images/${prefix}/${timestamp}-${randomStr}-${sanitised}`;
}

function buildPublicUrl(key: string): string {
  return buildObjectUrl(key);
}

// ─── Media Upload (images & videos) ─────────────────────────────────

export interface MediaUploadResult {
  success: boolean;
  message: string;
  url?: string;
  key?: string;
  filename?: string;
}

/**
 * Upload an image or video file to S3 for use in the rich text editor.
 * Validates authentication, file type, and file size.
 */
export async function uploadNotificationMedia(
  formData: FormData
): Promise<MediaUploadResult> {
  const session = await getServerAuthSession();
  const hodDepartmentId = await getHodDepartmentId(session);
  if (!canManageNotifications(session) && !hodDepartmentId) {
    return { success: false, message: 'Not authorised' };
  }

  const file = formData.get('file') as File | null;
  if (!file) {
    return { success: false, message: 'No file provided' };
  }

  if (!ALLOWED_MEDIA_TYPES.includes(file.type)) {
    return {
      success: false,
      message: `Invalid file type. Allowed: JPEG, PNG, GIF, WebP, MP4, WebM`,
    };
  }

  if (file.size > MAX_MEDIA_SIZE) {
    return {
      success: false,
      message: 'File too large. Maximum size is 50 MB.',
    };
  }

  try {
    const key = generateUniqueKey('notifications/media', file.name);
    await uploadFileToS3(file, key);
    const url = buildPublicUrl(key);

    return {
      success: true,
      message: 'File uploaded successfully',
      url,
      key,
      filename: file.name,
    };
  } catch (error) {
    console.error('Media upload failed:', error);
    return { success: false, message: 'Upload failed. Please try again.' };
  }
}

// ─── Document Upload (PDF, DOC, XLS) ────────────────────────────────

export interface DocumentUploadResult {
  success: boolean;
  message: string;
  url?: string;
  key?: string;
  filename?: string;
  fileSize?: number;
}

/**
 * Upload a document file to S3 for use as a downloadable link in the editor.
 * Validates authentication, file type, and file size.
 */
export async function uploadNotificationDocument(
  formData: FormData
): Promise<DocumentUploadResult> {
  const session = await getServerAuthSession();
  const hodDepartmentId = await getHodDepartmentId(session);
  if (!canManageNotifications(session) && !hodDepartmentId) {
    return { success: false, message: 'Not authorised' };
  }

  const file = formData.get('file') as File | null;
  if (!file) {
    return { success: false, message: 'No file provided' };
  }

  if (!ALLOWED_DOCUMENT_TYPES.includes(file.type)) {
    return {
      success: false,
      message: 'Invalid file type. Allowed: PDF, DOC, DOCX, XLS, XLSX',
    };
  }

  if (file.size > MAX_DOCUMENT_SIZE) {
    return {
      success: false,
      message: 'File too large. Maximum size is 100 MB.',
    };
  }


  try {
    const key = generateUniqueKey('notifications/documents', file.name);
    await uploadFileToS3(file, key);
    const url = buildPublicUrl(key);

    return {
      success: true,
      message: 'Document uploaded successfully',
      url,
      key,
      filename: file.name,
      fileSize: file.size,
    };
  } catch (error) {
    console.error('Document upload failed:', error);
    return { success: false, message: 'Upload failed. Please try again.' };
  }
}
