import { check, pgEnum, pgTable, uniqueIndex } from 'drizzle-orm/pg-core';
import { relations, sql } from 'drizzle-orm';

import { clubs } from './clubs.schema';

export const eventCategoryEnum = pgEnum('event_category', [
  'academic',
  'technical',
  'cultural',
  'sports',
  'clubs-societies',
  'achievements',
  'placements',
  'outreach',
  'miscellaneous',
  'campus-highlights',
]);

export const events = pgTable(
  'events',
  (t) => ({
    id: t.serial('id').primaryKey(),
    title: t.varchar('title', { length: 256 }).unique().notNull(),
    description: t.text('description'),
    categories: eventCategoryEnum('categories')
      .array()
      .notNull()
      .default(sql`'{}'::event_category[]`),
    isFeatured: t.boolean('is_featured').default(false).notNull(),
    startDate: t.date('start_date').notNull(),
    endDate: t.date('end_date'), // Optional - null means single-day event
    location: t.varchar('location', { length: 256 }),
    locationUrl: t.varchar('location_url', { length: 512 }),
    clubId: t.integer('club_id').references(() => clubs.id),
    images: t
      .text('images')
      .array()
      .notNull()
      .default(sql`'{}'::text[]`),
    documents: t
      .text('documents')
      .array()
      .notNull()
      .default(sql`'{}'::text[]`),
    createdAt: t.timestamp('created_at').defaultNow().notNull(),
    updatedAt: t
      .timestamp('updated_at')
      .$onUpdate(() => new Date())
      .notNull(),
  }),
  (events) => ({
    eventsTitleIndex: uniqueIndex('events_title_idx').on(events.title),
    // Both location fields must be filled together or both null
    locationCheck: check(
      'location_check',
      sql`(${events.location} IS NULL AND ${events.locationUrl} IS NULL) OR (${events.location} IS NOT NULL AND ${events.locationUrl} IS NOT NULL)`
    ),
    // endDate must be different from startDate (if endDate is provided)
    dateCheck: check(
      'date_check',
      sql`${events.endDate} IS NULL OR ${events.endDate} > ${events.startDate}`
    ),
  })
);

export const eventsRelations = relations(events, ({ one }) => ({
  club: one(clubs, {
    fields: [events.clubId],
    references: [clubs.id],
  }),
}));
