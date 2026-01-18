import { pgTable } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const scsa_minutes = pgTable('scsa_minutes', (t) => ({
  id: t.serial('id').primaryKey(),
  meetingNo: t.varchar('meeting_no', { length: 16 }).notNull().unique(),
  date: t.date('date'),
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
