import { sql } from 'drizzle-orm';
import { pgTable } from 'drizzle-orm/pg-core';

export const scsa_minutes = pgTable('scsa_minutes', (t) => ({
  id: t.serial('id').primaryKey(),
  meetingNo: t.varchar('meeting_no', { length: 16 }).notNull().unique(),
  date: t.date('date'),
  minutes: t
    .text('minutes')
    .array()
    .notNull()
    .default(sql`'{}'::text[]`),
  createdAt: t
    .timestamp('created_at')
    .notNull()
    .default(sql`'2024-01-01 10:00:00'`),
  updatedAt: t
    .timestamp('updated_at')
    .notNull()
    .default(sql`'2024-01-01 10:00:00'`)
    .$onUpdate(() => new Date()),
}));
