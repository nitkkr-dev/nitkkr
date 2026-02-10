/**
 * Tenders Utilities
 *
 * Shared utility functions and types for tenders.
 * These are NOT server actions and can be used on both client and server.
 *
 * Status is COMPUTED dynamically based on dates:
 * - 'live': GREATEST(endDate, extendedDate) >= TODAY (today or future)
 * - 'archived': GREATEST(endDate, extendedDate) < TODAY (past)
 */

import type { Tender, TenderStatus } from '~/server/db/schema/tenders.schema';

// ============================================================================
// Types
// ============================================================================

/**
 * Extended tender type with computed status
 */
export interface TenderWithStatus extends Tender {
  status: TenderStatus;
}

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

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Compute the effective deadline for a tender
 * Returns the later of endDate or extendedDate
 */
export function getEffectiveDeadline(tender: Tender): Date {
  if (tender.extendedDate && tender.extendedDate > tender.endDate) {
    return tender.extendedDate;
  }
  return tender.endDate;
}

/**
 * Compute the status of a tender based on current date
 * Live: effective deadline >= today (includes today)
 * Archived: effective deadline < today (past)
 */
export function computeTenderStatus(tender: Tender): TenderStatus {
  const effectiveDeadline = getEffectiveDeadline(tender);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Compare dates only, not time

  // Normalize the effective deadline to midnight for fair comparison
  const deadlineDate = new Date(effectiveDeadline);
  deadlineDate.setHours(0, 0, 0, 0);

  return deadlineDate >= today ? 'live' : 'archived';
}

/**
 * Add computed status to a tender
 */
export function withStatus(tender: Tender): TenderWithStatus {
  return {
    ...tender,
    status: computeTenderStatus(tender),
  };
}
