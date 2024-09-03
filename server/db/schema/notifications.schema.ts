import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/pg-core';

import { clubs } from '.';

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
    clubId: integer('club_id').references(() => clubs.id),
  },
  (notifications) => {
    return {
      notificationsTitleIndex: uniqueIndex('notifications_title_idx').on(
        notifications.title
      ),
    };
  }
);
