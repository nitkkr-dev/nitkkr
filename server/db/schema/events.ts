import { relations } from 'drizzle-orm';
import {
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

import { clubs, persons } from '.';

export const events = pgTable('events', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 128 }).notNull(),
  description: varchar('description'),
  startDate: timestamp('date').notNull(),
  endDate: timestamp('date').notNull(),
  clubId: integer('club_id').references(() => clubs.id),
  updatedAt: timestamp('updated_at')
    .$onUpdate(() => new Date())
    .notNull(),
  updatedBy: integer('updated_by')
    .references(() => persons.id)
    .notNull(),
});

export const eventsRelations = relations(events, ({ one }) => ({
  club: one(clubs, {
    fields: [events.clubId],
    references: [clubs.id],
  }),
}));
