import { pgTable, uniqueIndex } from 'drizzle-orm/pg-core';

export const events = pgTable(
  'events',
  (t) => ({
    id: t.serial().primaryKey(),
    title: t.varchar({ length: 256 }).unique().notNull(),
    content: t.text(),
    category: t.varchar({ enum: ['student', 'faculty'] }).notNull(),
    isFeatured: t.boolean().default(false).notNull(),
    startDate: t.date().notNull(),
    endDate: t.date().notNull(),
    createdAt: t.timestamp().defaultNow().notNull(),
    updatedAt: t
      .timestamp()
      .$onUpdate(() => new Date())
      .notNull(),
  }),
  (table) => [uniqueIndex('events_title_idx').on(table.title)]
);
