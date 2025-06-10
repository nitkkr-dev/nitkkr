import { pgTable, uniqueIndex } from 'drizzle-orm/pg-core';

export const notifications = pgTable(
  'notifications',
  (t) => ({
    id: t.serial().primaryKey(),
    title: t.varchar({ length: 256 }).unique().notNull(),
    content: t.text(),
    category: t
      .varchar({
        enum: ['academic', 'tender', 'workshop', 'recruitment', 'hostel'],
      })
      .notNull(),
    createdAt: t.timestamp().defaultNow().notNull(),
    updatedAt: t
      .timestamp()
      .$onUpdate(() => new Date())
      .notNull(),
  }),
  (table) => [uniqueIndex('notifications_title_idx').on(table.title)]
);
