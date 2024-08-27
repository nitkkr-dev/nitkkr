import { date, pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const event = pgTable('event', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 128 }).notNull(),
  description: varchar('description', { length: 256 }).notNull(),
  date: date('date').notNull(),
});
