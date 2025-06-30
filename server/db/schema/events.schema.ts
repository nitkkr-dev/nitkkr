import { pgTable, uniqueIndex } from 'drizzle-orm/pg-core';
import { relations, sql } from 'drizzle-orm';

import { clubs } from '.';

export const events = pgTable(
  'events',
  (t) => ({
    id: t.serial('id').primaryKey(),
    title: t.varchar('title', { length: 256 }).unique().notNull(),
    description: t.text('description'),
    category: t
      .varchar('category', {
        enum: ['student', 'faculty'],
      })
      .notNull(),
    isFeatured: t.boolean('is_featured').default(false).notNull(),
    startDate: t.date('start_date').notNull(),
    endDate: t.date('end_date').notNull(),
    clubId: t.integer('club_id').references(() => clubs.id),
    images: t
      .text('images')
      .array()
      .notNull()
      .default(sql`'{}'::text[]`),
    createdAt: t.timestamp('created_at').defaultNow().notNull(),
    updatedAt: t
      .timestamp('updated_at')
      .$onUpdate(() => new Date())
      .notNull(),
  }),
  (events) => {
    return {
      eventsTitleIndex: uniqueIndex('events_title_idx').on(events.title),
    };
  }
);

export const eventsRelations = relations(events, ({ one }) => ({
  club: one(clubs, {
    fields: [events.clubId],
    references: [clubs.id],
  }),
}));
