'use server';

/**
 * Tenders Server Actions
 *
 * Next.js Server Actions for tender form submissions and management.
 * These actions require admin authentication (ccn@nitkkr.ac.in).
 *
 * Status is COMPUTED dynamically based on dates:
 * - 'live': GREATEST(endDate, extendedDate) >= TODAY (today or future)
 * - 'archived': GREATEST(endDate, extendedDate) < TODAY (past)
 */

import { revalidatePath } from 'next/cache';
import { eq, sql } from 'drizzle-orm';
import { z } from 'zod';

import { env } from '~/lib/env/server';
import { canManageNotifications, getServerAuthSession } from '~/server/auth';
import { db } from '~/server/db';
import { tenders, type TenderInsert } from '~/server/db/schema/tenders.schema';
import { uploadFileToS3 } from '~/server/s3/upload';

import {
  withStatus,
  type TenderWithStatus,
  type ActionResult,
  type TenderFormData,
} from './tenders.utils';

// Re-export types from utils for convenience
// Note: computeTenderStatus must be imported directly from './tenders.utils'
export type { TenderWithStatus, ActionResult, TenderFormData };

// ============================================================================
// Validation
// ============================================================================

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

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Check if the current user has permission to manage tenders
 * Only ccn@nitkkr.ac.in can manage tenders
 */
async function checkTenderPermission(): Promise<boolean> {
  const session = await getServerAuthSession();
  return canManageNotifications(session);
}

// ============================================================================
// Data Access Functions
// ============================================================================

/**
 * Get all tenders with computed status
 * Returns both live and archived tenders, sorted by effective deadline
 */
export async function getAllTenders(): Promise<TenderWithStatus[]> {
  const results = await db
    .select()
    .from(tenders)
    .orderBy(
      sql`GREATEST("tenders"."end_date", COALESCE("tenders"."extended_date", "tenders"."end_date")) DESC`
    );

  return results.map(withStatus);
}

/**
 * Get all live tenders (effective deadline >= today)
 * Ordered by effective deadline ASC (soonest deadline first)
 */
export async function getLiveTenders(): Promise<TenderWithStatus[]> {
  const results = await db
    .select()
    .from(tenders)
    .where(
      sql`GREATEST("tenders"."end_date", COALESCE("tenders"."extended_date", "tenders"."end_date")) >= CURRENT_DATE`
    )
    .orderBy(
      sql`GREATEST("tenders"."end_date", COALESCE("tenders"."extended_date", "tenders"."end_date")) ASC`
    );

  return results.map(withStatus);
}

/**
 * Get all archived tenders (effective deadline < today)
 * Ordered by effective deadline DESC (most recently archived first)
 */
export async function getArchivedTenders(): Promise<TenderWithStatus[]> {
  const results = await db
    .select()
    .from(tenders)
    .where(
      sql`GREATEST("tenders"."end_date", COALESCE("tenders"."extended_date", "tenders"."end_date")) < CURRENT_DATE`
    )
    .orderBy(
      sql`GREATEST("tenders"."end_date", COALESCE("tenders"."extended_date", "tenders"."end_date")) DESC`
    );

  return results.map(withStatus);
}

/**
 * Get a tender by its ID
 */
export async function getTenderById(
  id: number
): Promise<TenderWithStatus | null> {
  const result = await db.query.tenders.findFirst({
    where: (tender, { eq }) => eq(tender.id, id),
  });

  if (!result) return null;
  return withStatus(result);
}

/**
 * Get the count of tenders (for pagination)
 * @param archived - If true, count archived tenders; otherwise count live
 */
export async function getTenderCount(
  archived: boolean = false
): Promise<number> {
  const condition = archived
    ? sql`GREATEST("tenders"."end_date", COALESCE("tenders"."extended_date", "tenders"."end_date")) < CURRENT_DATE`
    : sql`GREATEST("tenders"."end_date", COALESCE("tenders"."extended_date", "tenders"."end_date")) >= CURRENT_DATE`;

  const result = await db
    .select({ count: sql<number>`count(*)::int` })
    .from(tenders)
    .where(condition);

  return result[0]?.count ?? 0;
}

/**
 * Get paginated tenders
 * @param archived - If true, get archived tenders; otherwise get live
 * @param page - Page number (1-based)
 * @param limit - Number of items per page
 */
export async function getPaginatedTenders(
  archived: boolean = false,
  page: number = 1,
  limit: number = 10
): Promise<TenderWithStatus[]> {
  const offset = (page - 1) * limit;

  const condition = archived
    ? sql`GREATEST("tenders"."end_date", COALESCE("tenders"."extended_date", "tenders"."end_date")) < CURRENT_DATE`
    : sql`GREATEST("tenders"."end_date", COALESCE("tenders"."extended_date", "tenders"."end_date")) >= CURRENT_DATE`;

  const results = await db
    .select()
    .from(tenders)
    .where(condition)
    .orderBy(
      archived
        ? sql`GREATEST("tenders"."end_date", COALESCE("tenders"."extended_date", "tenders"."end_date")) DESC`
        : sql`GREATEST("tenders"."end_date", COALESCE("tenders"."extended_date", "tenders"."end_date")) ASC`
    )
    .limit(limit)
    .offset(offset);

  return results.map(withStatus);
}

/**
 * Create a new tender
 * Validates that endDate > startDate
 */
async function createTender(data: TenderInsert): Promise<TenderWithStatus> {
  // Validate dates
  if (data.endDate <= data.startDate) {
    throw new Error('End date must be after start date');
  }

  if (data.extendedDate && data.extendedDate <= data.endDate) {
    throw new Error('Extended date must be after end date');
  }

  const [newTender] = await db.insert(tenders).values(data).returning();

  return withStatus(newTender);
}

/**
 * Update an existing tender
 */
async function updateTender(
  id: number,
  data: Partial<TenderInsert>
): Promise<TenderWithStatus> {
  const existingTender = await db.query.tenders.findFirst({
    where: (tender, { eq }) => eq(tender.id, id),
  });

  if (!existingTender) {
    throw new Error('Tender not found');
  }

  // Merge existing data with updates for validation
  const newStartDate = data.startDate ?? existingTender.startDate;
  const newEndDate = data.endDate ?? existingTender.endDate;
  const newExtendedDate = data.extendedDate ?? existingTender.extendedDate;

  // Validate dates
  if (newEndDate <= newStartDate) {
    throw new Error('End date must be after start date');
  }

  if (newExtendedDate && newExtendedDate <= newEndDate) {
    throw new Error('Extended date must be after end date');
  }

  const [updatedTender] = await db
    .update(tenders)
    .set(data)
    .where(eq(tenders.id, id))
    .returning();

  return withStatus(updatedTender);
}

/**
 * Update only the extended date of a tender
 * Special function for extending deadlines
 */
async function updateTenderExtendedDate(
  id: number,
  newDate: Date
): Promise<TenderWithStatus> {
  const existingTender = await db.query.tenders.findFirst({
    where: (tender, { eq }) => eq(tender.id, id),
  });

  if (!existingTender) {
    throw new Error('Tender not found');
  }

  // Validate extended date is after end date
  if (newDate <= existingTender.endDate) {
    throw new Error('Extended date must be after the original end date');
  }

  const [updatedTender] = await db
    .update(tenders)
    .set({ extendedDate: newDate })
    .where(eq(tenders.id, id))
    .returning();

  return withStatus(updatedTender);
}

/**
 * Delete a tender by ID
 */
async function deleteTender(id: number): Promise<void> {
  await db.delete(tenders).where(eq(tenders.id, id));
}

// ============================================================================
// Server Actions (with authentication)
// ============================================================================

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
