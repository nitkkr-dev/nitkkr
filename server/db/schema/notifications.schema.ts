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
      enum: ['academic', 'tender', 'workshop', 'recruitment', 'hostel'],
    }).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at')
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (notifications) => {
    return {
      notificationsTitleIndex: uniqueIndex('notifications_title_idx').on(
        notifications.title
      ),
    };
  }
);
