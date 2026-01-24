import { pgTable } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const bogMeetings = pgTable('board_of_governors_meetings', (t) => ({
  id: t.serial('id').primaryKey(),
  meetingNo: t.varchar('meeting_no', { length: 16 }).notNull(),
  date: t.date('date').notNull(),
  agenda: t
    .text('agenda')
    .array()
    .notNull()
    .default(sql`'{}'::text[]`),
  minutes: t
    .text('minutes')
    .array()
    .notNull()
    .default(sql`'{}'::text[]`),
  createdAt: t.timestamp('created_at').defaultNow().notNull(),
  updatedAt: t
    .timestamp('updated_at')
    .$onUpdate(() => new Date())
    .notNull(),
}));
