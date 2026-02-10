'use server';

/**
 * Tenders Server Actions
 *
 * Next.js Server Actions for tender form submissions and management.
 * These actions require admin authentication (ccn@nitkkr.ac.in).
 */

import { revalidatePath } from 'next/cache';
import { z } from 'zod';

import { env } from '~/lib/env/server';
import { canManageNotifications, getServerAuthSession } from '~/server/auth';
import {
  createTender,
  updateTender,
  updateTenderExtendedDate,
  deleteTender,
  getTenderById,
  getLiveTenders,
  getArchivedTenders,
  getPaginatedTenders,
  getTenderCount,
  type TenderWithStatus,
} from '~/server/services/tenders';
import { uploadFileToS3 } from '~/server/s3/upload';

// Validation schema for tender data
const tenderSchema = z.object({
  title: z.string().min(1, 'Title is required').max(256, 'Title too long'),
  description: z.string().optional(),
  pdfLink: z
    .string()
    .url('Invalid PDF URL')
    .optional()
    .or(z.literal(''))
    .nullable(),
  pdfName: z.string().max(256, 'PDF name too long').optional().nullable(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  extendedDate: z.coerce.date().optional().nullable(),
});

export interface ActionResult {
  success: boolean;
  message: string;
  id?: number;
}

export interface TenderFormData {
  title: string;
  description?: string;
  pdfLink?: string | null;
  pdfName?: string | null;
  startDate: string;
  endDate: string;
  extendedDate?: string | null;
}

/**
 * Check if the current user has permission to manage tenders
 * Only ccn@nitkkr.ac.in can manage tenders
 */
async function checkTenderPermission(): Promise<boolean> {
  const session = await getServerAuthSession();
  return canManageNotifications(session);
}

/**
 * Upload a document for a tender (PDF only)
 */
export async function uploadTenderDocument(
  formData: FormData
): Promise<{ success: boolean; message: string; url?: string }> {
  // Check permission
  const hasPermission = await checkTenderPermission();
  if (!hasPermission) {
    return {
      success: false,
      message: 'You do not have permission to upload documents',
    };
  }

  try {
    const file = formData.get('file') as File;

    if (!file) {
      return { success: false, message: 'No file provided' };
    }

    // Only allow PDF documents
    const allowedTypes = ['application/pdf'];
    if (!allowedTypes.includes(file.type)) {
      return {
        success: false,
        message: 'Only PDF documents are allowed',
      };
    }

    // Validate file size (max 10MB)
    const maxFileSize = 10 * 1024 * 1024;
    if (file.size > maxFileSize) {
      return {
        success: false,
        message: 'File too large. Maximum size is 10MB.',
      };
    }

    // Generate S3 path: tenders/{year}/{month}/{timestamp}-{filename}
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const timestamp = Date.now();
    const s3Path = `isaac-s3-images/tenders/${year}/${month}/${timestamp}-${sanitizedName}`;

    // Upload to S3
    await uploadFileToS3(file, s3Path);

    // Construct the public URL
    const publicUrl = `https://${env.AWS_PUBLIC_S3_NAME}.s3.${env.AWS_S3_REGION}.amazonaws.com/${s3Path}`;

    return {
      success: true,
      message: 'Document uploaded successfully',
      url: publicUrl,
    };
  } catch (error) {
    console.error('Error uploading tender document:', error);
    return {
      success: false,
      message: 'Failed to upload document. Please try again.',
    };
  }
}

/**
 * Create a new tender
 */
export async function createTenderAction(
  data: TenderFormData
): Promise<ActionResult> {
  // Check permission
  const hasPermission = await checkTenderPermission();
  if (!hasPermission) {
    return {
      success: false,
      message: 'You do not have permission to create tenders',
    };
  }

  try {
    // Validate data
    const validatedData = tenderSchema.parse({
      ...data,
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate),
      extendedDate: data.extendedDate ? new Date(data.extendedDate) : null,
    });

    // Create the tender
    const tender = await createTender({
      title: validatedData.title,
      description: validatedData.description ?? null,
      pdfLink: validatedData.pdfLink || null,
      pdfName: validatedData.pdfName ?? null,
      startDate: validatedData.startDate,
      endDate: validatedData.endDate,
      extendedDate: validatedData.extendedDate ?? null,
    });

    // Revalidate tenders pages
    revalidatePath('/[locale]/notifications/tenders', 'page');

    return {
      success: true,
      message: 'Tender created successfully',
      id: tender.id,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: `Validation error: ${error.errors.map((e) => e.message).join(', ')}`,
      };
    }

    if (error instanceof Error) {
      return {
        success: false,
        message: error.message,
      };
    }

    return {
      success: false,
      message: 'An unexpected error occurred',
    };
  }
}

/**
 * Update an existing tender
 */
export async function updateTenderAction(
  id: number,
  data: TenderFormData
): Promise<ActionResult> {
  // Check permission
  const hasPermission = await checkTenderPermission();
  if (!hasPermission) {
    return {
      success: false,
      message: 'You do not have permission to update tenders',
    };
  }

  try {
    // Validate data
    const validatedData = tenderSchema.parse({
      ...data,
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate),
      extendedDate: data.extendedDate ? new Date(data.extendedDate) : null,
    });

    // Update the tender
    await updateTender(id, {
      title: validatedData.title,
      description: validatedData.description ?? null,
      pdfLink: validatedData.pdfLink || null,
      pdfName: validatedData.pdfName ?? null,
      startDate: validatedData.startDate,
      endDate: validatedData.endDate,
      extendedDate: validatedData.extendedDate ?? null,
    });

    // Revalidate tenders pages
    revalidatePath('/[locale]/notifications/tenders', 'page');

    return {
      success: true,
      message: 'Tender updated successfully',
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: `Validation error: ${error.errors.map((e) => e.message).join(', ')}`,
      };
    }

    if (error instanceof Error) {
      return {
        success: false,
        message: error.message,
      };
    }

    return {
      success: false,
      message: 'An unexpected error occurred',
    };
  }
}

/**
 * Update only the extended date of a tender
 */
export async function updateTenderExtendedDateAction(
  id: number,
  newDate: Date
): Promise<ActionResult> {
  // Check permission
  const hasPermission = await checkTenderPermission();
  if (!hasPermission) {
    return {
      success: false,
      message: 'You do not have permission to update tenders',
    };
  }

  try {
    await updateTenderExtendedDate(id, newDate);

    // Revalidate tenders pages
    revalidatePath('/[locale]/notifications/tenders', 'page');

    return {
      success: true,
      message: 'Tender deadline extended successfully',
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: error.message,
      };
    }

    return {
      success: false,
      message: 'An unexpected error occurred',
    };
  }
}

/**
 * Delete a tender
 */
export async function deleteTenderAction(id: number): Promise<ActionResult> {
  // Check permission
  const hasPermission = await checkTenderPermission();
  if (!hasPermission) {
    return {
      success: false,
      message: 'You do not have permission to delete tenders',
    };
  }

  try {
    await deleteTender(id);

    // Revalidate tenders pages
    revalidatePath('/[locale]/notifications/tenders', 'page');

    return {
      success: true,
      message: 'Tender deleted successfully',
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: error.message,
      };
    }

    return {
      success: false,
      message: 'An unexpected error occurred',
    };
  }
}

/**
 * Get tender by ID (for editing)
 */
export async function getTenderByIdAction(
  id: number
): Promise<TenderWithStatus | null> {
  return await getTenderById(id);
}

/**
 * Get live tenders
 */
export async function getLiveTendersAction(): Promise<TenderWithStatus[]> {
  return await getLiveTenders();
}

/**
 * Get archived tenders
 */
export async function getArchivedTendersAction(): Promise<TenderWithStatus[]> {
  return await getArchivedTenders();
}

/**
 * Get paginated tenders
 */
export async function getPaginatedTendersAction(
  archived: boolean = false,
  page: number = 1,
  limit: number = 10
): Promise<TenderWithStatus[]> {
  return await getPaginatedTenders(archived, page, limit);
}

/**
 * Get tender count
 */
export async function getTenderCountAction(
  archived: boolean = false
): Promise<number> {
  return await getTenderCount(archived);
}
