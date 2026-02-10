/**
 * Tenders Service
 *
 * Provides data access functions for the tenders feature.
 * Handles CRUD operations for tenders.
 *
 * Status is COMPUTED dynamically based on dates:
 * - 'live': GREATEST(endDate, extendedDate) > TODAY
 * - 'archived': GREATEST(endDate, extendedDate) <= TODAY
 */

import { and, asc, desc, eq, gt, lte, or, sql } from 'drizzle-orm';

import { db } from '~/server/db';
import {
  tenders,
  type Tender,
  type TenderInsert,
  type TenderStatus,
} from '~/server/db/schema/tenders.schema';

/**
 * Extended tender type with computed status
 */
export interface TenderWithStatus extends Tender {
  status: TenderStatus;
}

/**
 * Compute the effective deadline for a tender
 * Returns the later of endDate or extendedDate
 */
function getEffectiveDeadline(tender: Tender): Date {
  if (tender.extendedDate && tender.extendedDate > tender.endDate) {
    return tender.extendedDate;
  }
  return tender.endDate;
}

/**
 * Compute the status of a tender based on current date
 */
export function computeTenderStatus(tender: Tender): TenderStatus {
  const effectiveDeadline = getEffectiveDeadline(tender);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Compare dates only, not time

  return effectiveDeadline > today ? 'live' : 'archived';
}

/**
 * Add computed status to a tender
 */
function withStatus(tender: Tender): TenderWithStatus {
  return {
    ...tender,
    status: computeTenderStatus(tender),
  };
}

/**
 * SQL condition for live tenders: GREATEST(end_date, COALESCE(extended_date, end_date)) > CURRENT_DATE
 */
const liveTendersCondition = sql`GREATEST(${tenders.endDate}, COALESCE(${tenders.extendedDate}, ${tenders.endDate})) > CURRENT_DATE`;

/**
 * SQL condition for archived tenders: GREATEST(end_date, COALESCE(extended_date, end_date)) <= CURRENT_DATE
 */
const archivedTendersCondition = sql`GREATEST(${tenders.endDate}, COALESCE(${tenders.extendedDate}, ${tenders.endDate})) <= CURRENT_DATE`;

/**
 * Get all live tenders (effective deadline > today)
 * Ordered by effective deadline ASC (soonest deadline first)
 */
export async function getLiveTenders(): Promise<TenderWithStatus[]> {
  const results = await db
    .select()
    .from(tenders)
    .where(liveTendersCondition)
    .orderBy(
      sql`GREATEST(${tenders.endDate}, COALESCE(${tenders.extendedDate}, ${tenders.endDate})) ASC`
    );

  return results.map(withStatus);
}

/**
 * Get all archived tenders (effective deadline <= today)
 * Ordered by effective deadline DESC (most recently archived first)
 */
export async function getArchivedTenders(): Promise<TenderWithStatus[]> {
  const results = await db
    .select()
    .from(tenders)
    .where(archivedTendersCondition)
    .orderBy(
      sql`GREATEST(${tenders.endDate}, COALESCE(${tenders.extendedDate}, ${tenders.endDate})) DESC`
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
  const result = await db
    .select({ count: sql<number>`count(*)::int` })
    .from(tenders)
    .where(archived ? archivedTendersCondition : liveTendersCondition);

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

  const results = await db
    .select()
    .from(tenders)
    .where(archived ? archivedTendersCondition : liveTendersCondition)
    .orderBy(
      archived
        ? sql`GREATEST(${tenders.endDate}, COALESCE(${tenders.extendedDate}, ${tenders.endDate})) DESC`
        : sql`GREATEST(${tenders.endDate}, COALESCE(${tenders.extendedDate}, ${tenders.endDate})) ASC`
    )
    .limit(limit)
    .offset(offset);

  return results.map(withStatus);
}

/**
 * Create a new tender
 * Validates that endDate > startDate
 */
export async function createTender(
  data: TenderInsert
): Promise<TenderWithStatus> {
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
export async function updateTender(
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
export async function updateTenderExtendedDate(
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
export async function deleteTender(id: number): Promise<void> {
  await db.delete(tenders).where(eq(tenders.id, id));
}
