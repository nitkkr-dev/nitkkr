import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/pg-core';

export const notifications = pgTable(
  'notifications',
  {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 256 }).unique().notNull(),
    content: text('content'),
    category: varchar('category', {
      enum: ['academic', 'tender', 'workshop', 'recruitment'],
    }).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at')
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [uniqueIndex('notifications_title_idx').on(table.title)]
);
