import { relations } from 'drizzle-orm';
import { pgTable } from 'drizzle-orm/pg-core';

import { clubMembers, clubSocials, departments, faculty, persons } from '.';

export const clubs = pgTable('clubs', (t) => ({
  id: t.smallserial().primaryKey(),
  name: t.varchar({ length: 128 }).notNull(),
  urlName: t.varchar({ length: 128 }).notNull(),
  alias: t.varchar({ length: 16 }),
  tagline: t.varchar({ length: 256 }).notNull(),
  email: t.varchar({ length: 256 }).notNull(),
  aboutUs: t.varchar().notNull(),
  category: t
    .varchar({ enum: ['committee', 'cultural', 'crew', 'technical'] })
    .notNull(),
  departmentId: t.smallint().references(() => departments.id),
  facultyInchargeId1: t
    .integer()
    .references(() => faculty.id)
    .notNull(),
  facultyInchargeId2: t.integer().references(() => faculty.id),
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
  clubMembers: many(clubMembers),
  clubSocials: many(clubSocials),
  department: one(departments, {
    fields: [clubs.departmentId],
    references: [departments.id],
  }),
  facultyIncharge1: one(faculty, {
    relationName: 'facultyIncharge1',
    fields: [clubs.facultyInchargeId1],
    references: [faculty.id],
  }),
  facultyIncharge2: one(faculty, {
    relationName: 'facultyIncharge2',
    fields: [clubs.facultyInchargeId2],
    references: [faculty.id],
  }),
}));
