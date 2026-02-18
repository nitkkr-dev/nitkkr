/**
 * Tenders Schema
 *
 * This schema defines the tenders table for managing institutional tender opportunities.
 * Tenders have temporal properties (startDate, endDate, extendedDate).
 *
 * Status is COMPUTED dynamically based on dates (not stored):
 * - 'live': GREATEST(endDate, extendedDate) > TODAY
 * - 'archived': GREATEST(endDate, extendedDate) <= TODAY
 *
 * This approach ensures:
 * - No cron job needed for status updates
 * - Always accurate status based on current date
 * - Instant status updates when admin changes dates
 */

import { index, pgTable, uniqueIndex } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

/**
 * Main tenders table
 * Note: Status is computed at query time, not stored
 */
export const tenders = pgTable(
  'tenders',
  (t) => ({
    id: t.serial('id').primaryKey(),

    /** Tender title - must be unique */
    title: t.varchar('title', { length: 256 }).unique().notNull(),

    /** Detailed description of the tender */
    description: t.text('description'),

    /** URL to the tender PDF document */
    pdfLink: t.text('pdf_link'),

    /** Custom display name for the PDF link (shown in UI) */
    pdfName: t.varchar('pdf_name', { length: 256 }),

    /** Start date when tender becomes active */
    startDate: t.date('start_date', { mode: 'date' }).notNull(),

    /** Original end date for tender submissions */
    endDate: t.date('end_date', { mode: 'date' }).notNull(),

    /**
     * Extended deadline date (nullable)
     * If set, must be greater than endDate
     * Can be edited multiple times
     */
    extendedDate: t.date('extended_date', { mode: 'date' }),

    /** Timestamp when the tender was created */
    createdAt: t.timestamp('created_at').defaultNow().notNull(),

    /** Timestamp when the tender was last updated */
    updatedAt: t
      .timestamp('updated_at')
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  }),
  (table) => ({
    // Unique index on title for fast lookups and uniqueness
    titleIndex: uniqueIndex('tenders_title_idx').on(table.title),

    // Index on endDate for date-based queries
    endDateIndex: index('tenders_end_date_idx').on(table.endDate),

    // Index on extendedDate for extended deadline queries
    extendedDateIndex: index('tenders_extended_date_idx').on(
      table.extendedDate
    ),
  })
);

/**
 * Tenders relations (empty for now, can be extended for future relationships)
 */
export const tendersRelations = relations(tenders, () => ({}));

/**
 * Type exports for use in services and actions
 */
export type Tender = typeof tenders.$inferSelect;
export type TenderInsert = typeof tenders.$inferInsert;

/**
 * Computed tender status type
 * Status is calculated based on dates, not stored in DB
 */
export type TenderStatus = 'live' | 'archived';
