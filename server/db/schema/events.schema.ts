import {
  boolean,
  date,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/pg-core';
import { relations, sql } from 'drizzle-orm';

import { clubs } from '.';

export const events = pgTable(
  'events',
  {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 256 }).unique().notNull(),
    description: text('description'),
    category: varchar('category', {
      enum: ['student', 'faculty'],
    }).notNull(),
    isFeatured: boolean('is_featured').default(false).notNull(),
    startDate: date('start_date').notNull(),
    endDate: date('end_date').notNull(),
    clubId: integer('club_id').references(() => clubs.id),
    images: text('images')
      .array()
      .notNull()
      .default(sql`'{}'::text[]`),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at')
      .$onUpdate(() => new Date())
      .notNull(),
  },
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
