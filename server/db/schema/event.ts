import { pgTable, smallserial, text } from 'drizzle-orm/pg-core';

export const event = pgTable('event', {
  eventId: smallserial('event_id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  date: text('date').notNull(),
  venue: text('venue'),
});
