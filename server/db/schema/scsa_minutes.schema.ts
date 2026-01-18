import { sql } from 'drizzle-orm';
import { pgTable } from 'drizzle-orm/pg-core';

export const scsa_minutes = pgTable('scsa_minutes', (t) => ({
  id: t.serial('id').primaryKey(),
  meetingNo: t.varchar('meeting_no', { length: 16 }).notNull().unique(),
  date: t.varchar('date', { length: 16 }),
  minutes: t
    .text('minutes')
    .array()
    .notNull()
    .default(sql`'{}'::text[]`),
}));
