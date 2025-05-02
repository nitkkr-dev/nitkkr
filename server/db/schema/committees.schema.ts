import { pgTable } from 'drizzle-orm/pg-core';

export const committeeMembers = pgTable('committee_members', (t) => ({
  id: t.serial().primaryKey(),
  committeeType: t
    .varchar({ enum: ['building', 'financial', 'governor', 'senate'] })
    .notNull(),
  serial: t.smallint().notNull(),
  nomination: t.varchar({ length: 32 }),
  name: t.varchar({ length: 64 }).notNull(),
  place: t.varchar({ length: 256 }).notNull(),
  servingAs: t.varchar({ length: 32 }).notNull(),
}));

export const committeeMeetings = pgTable('committee_meetings', (t) => ({
  id: t.serial().primaryKey(),
  committeeType: t
    .varchar({ enum: ['building', 'financial', 'governor', 'senate'] })
    .notNull(),
  meetingNumber: t.smallint().notNull(),
  place: t.varchar({ length: 256 }).notNull(),
  agendaUrl: t.text().unique().notNull(),
  minutesUrl: t.text().unique().notNull(),
  createdAt: t.timestamp({ mode: 'date' }).defaultNow().notNull(),
}));
