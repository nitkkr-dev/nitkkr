import {
  pgTable,
  serial,
  smallint,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

export const committeeMembers = pgTable('committee_members', {
  id: serial('id').primaryKey(),
  committeeType: varchar('committee_type', {
    enum: ['building', 'financial', 'governor', 'senate'],
  }).notNull(),
  serial: smallint('serial').notNull(),
  nomination: varchar('nomination', { length: 32 }),
  name: varchar('name', { length: 64 }).notNull(),
  place: varchar('place', { length: 256 }).notNull(),
  servingAs: varchar('serving_as', { length: 32 }).notNull(),
});

export const committeeMeetings = pgTable('committee_meetings', {
  id: serial('id').primaryKey(),
  committeeType: varchar('committee_type', {
    enum: ['building', 'financial', 'governor', 'senate'],
  }).notNull(),
  meetingNumber: smallint('meeting_number').notNull(),
  place: varchar('place', { length: 256 }).notNull(),
  agendaUrl: text('agenda_url').unique().notNull(),
  minutesUrl: text('minutes_url').unique().notNull(),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
});
