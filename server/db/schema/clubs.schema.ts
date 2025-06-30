import { relations } from 'drizzle-orm';
import { pgTable } from 'drizzle-orm/pg-core';

import {
  clubMembers,
  clubSocials,
  departments,
  events,
  notifications,
  persons,
} from '.';
import { clubFacultyHeads } from './club-faculty-heads.schema';

export const clubs = pgTable('clubs', (t) => ({
  id: t.smallserial().primaryKey(),
  name: t.varchar({ length: 128 }).notNull(),
  urlName: t.varchar({ length: 128 }).notNull(),
  alias: t.varchar({ length: 16 }),
  tagline: t.varchar({ length: 256 }).notNull(),
  email: t.varchar({ length: 256 }).notNull(),
  aboutUs: t.varchar().notNull(),
  howToJoinUs: t.varchar().notNull(),
  whyToJoinUs: t.varchar().notNull(),
  category: t
    .varchar({ enum: ['committee', 'cultural', 'crew', 'technical'] })
    .notNull(),
  departmentId: t.smallint().references(() => departments.id),
  isActive: t.boolean().default(true).notNull(),
  createdOn: t.date({ mode: 'date' }).defaultNow().notNull(),
  updatedAt: t
    .timestamp()
    .$onUpdate(() => new Date())
    .notNull(),
  updatedBy: t
    .integer()
    .references(() => persons.id)
    .notNull(),
}));

export const clubsRelations = relations(clubs, ({ many, one }) => ({
  clubEvents: many(events),
  clubMembers: many(clubMembers),
  clubSocials: many(clubSocials),
  department: one(departments, {
    fields: [clubs.departmentId],
    references: [departments.id],
  }),
  clubNotifications: many(notifications),
  clubFacultyHeads: many(clubFacultyHeads),
}));
