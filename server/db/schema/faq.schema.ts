import { pgTable, uniqueIndex } from 'drizzle-orm/pg-core';

export const faqs = pgTable(
  'faqs',
  (t) => ({
    id: t.serial().primaryKey(),
    title: t.varchar({ length: 256 }).notNull(),
    description: t.text().notNull(),
    category: t.varchar({ length: 128 }).notNull(),
    createdOn: t.date({ mode: 'date' }).defaultNow().notNull(),
    updatedAt: t
      .timestamp()
      .$onUpdate(() => new Date())
      .notNull(),
  }),
  (table) => [uniqueIndex('faqs_category_idx').on(table.category)]
);
