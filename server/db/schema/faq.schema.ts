import {
  date,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/pg-core';

export const faqs = pgTable(
  'faqs',
  {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 256 }).notNull(),
    description: text('description').notNull(),
    category: varchar('category', { length: 128 }).notNull(),
    createdOn: date('created_on', { mode: 'date' }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at')
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (faqs) => {
    return {
      faqsCategoryIndex: uniqueIndex('faqs_category_idx').on(faqs.category),
    };
  }
);
