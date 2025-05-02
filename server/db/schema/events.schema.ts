import {
  boolean,
  date,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/pg-core';

export const events = pgTable(
  'events',
  {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 256 }).unique().notNull(),
    content: text('content'),
    category: varchar('category', {
      enum: ['student', 'faculty'],
    }).notNull(),
    isFeatured: boolean('is_featured').default(false).notNull(),
    startDate: date('start_date').notNull(),
    endDate: date('end_date').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at')
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [uniqueIndex('events_title_idx').on(table.title)]
);
