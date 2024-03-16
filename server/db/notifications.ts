import {
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/pg-core';

export const notificationCategoryEnum = pgEnum('notification_category', [
  'academic',
  'tender',
  'workshop',
  'recruitment',
]);

export const notifications = pgTable(
  'notifications',
  {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 256 }).unique().notNull(),
    content: text('content'),
    category: notificationCategoryEnum('category').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
  },
  (notifications) => {
    return {
      titleIndex: uniqueIndex('title_idx').on(notifications.title),
    };
  }
);
