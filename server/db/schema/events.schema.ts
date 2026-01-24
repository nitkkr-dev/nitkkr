import {
  check,
  pgEnum,
  pgTable,
  primaryKey,
  uniqueIndex,
} from 'drizzle-orm/pg-core';
import { relations, sql } from 'drizzle-orm';

import { clubs } from './clubs.schema';
import { departments } from './departments.schema';

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
    time: t.varchar('time', { length: 32 }), // Optional - e.g. "4:30 PM"
    location: t.varchar('location', { length: 256 }),
    locationUrl: t.varchar('location_url', { length: 512 }),
    // NOTE: clubId removed - now using junction table for many-to-many
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

// ===================== JUNCTION TABLES =====================

// Junction table: events <-> departments (many-to-many)
export const eventDepartments = pgTable(
  'event_departments',
  (t) => ({
    eventId: t
      .integer('event_id')
      .notNull()
      .references(() => events.id, { onDelete: 'cascade' }),
    departmentId: t
      .integer('department_id')
      .notNull()
      .references(() => departments.id, { onDelete: 'cascade' }),
  }),
  (table) => ({
    pk: primaryKey({ columns: [table.eventId, table.departmentId] }),
  })
);

// Junction table: events <-> clubs (many-to-many)
export const eventClubs = pgTable(
  'event_clubs',
  (t) => ({
    eventId: t
      .integer('event_id')
      .notNull()
      .references(() => events.id, { onDelete: 'cascade' }),
    clubId: t
      .integer('club_id')
      .notNull()
      .references(() => clubs.id, { onDelete: 'cascade' }),
  }),
  (table) => ({
    pk: primaryKey({ columns: [table.eventId, table.clubId] }),
  })
);

// ===================== RELATIONS =====================

// Junction table relations
export const eventDepartmentsRelations = relations(
  eventDepartments,
  ({ one }) => ({
    event: one(events, {
      fields: [eventDepartments.eventId],
      references: [events.id],
    }),
    department: one(departments, {
      fields: [eventDepartments.departmentId],
      references: [departments.id],
    }),
  })
);

export const eventClubsRelations = relations(eventClubs, ({ one }) => ({
  event: one(events, {
    fields: [eventClubs.eventId],
    references: [events.id],
  }),
  club: one(clubs, {
    fields: [eventClubs.clubId],
    references: [clubs.id],
  }),
}));

// Main events relations
export const eventsRelations = relations(events, ({ many }) => ({
  eventDepartments: many(eventDepartments),
  eventClubs: many(eventClubs),
}));
