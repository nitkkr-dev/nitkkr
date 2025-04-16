import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

import { clubs } from '.';

export const notifications = pgTable(
  'notifications',
  {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 256 }).unique().notNull(),
    content: text('content'),
    category: varchar('category', {
      enum: ['academic', 'tender', 'workshop', 'recruitment', 'student-activity'],
    }).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at')
      .$onUpdate(() => new Date())
      .notNull(),
    clubId: integer('club_id').references(() => clubs.id),
  },
  (notifications) => {
    return {
      notificationsTitleIndex: uniqueIndex('notifications_title_idx').on(
        notifications.title
      ),
      // Add check constraint
      clubIdRequiredForStudentActivity: sql`
        CHECK (
          category != 'student-activity' OR club_id IS NOT NULL
        )
      `,
    };
  }
);
