import { relations, sql } from 'drizzle-orm';
import { pgTable } from 'drizzle-orm/pg-core';

import { faculty } from '.';

export const deans = pgTable('deans', (t) => ({
  id: t.smallserial().primaryKey(),
  domain: t
    .varchar({
      enum: [
        'academic',
        'estate-and-construction',
        'faculty-welfare',
        'industry-and-international-relations',
        'planning-and-development',
        'research-and-consultancy',
        'student-welfare',
      ],
    })
    .unique()
    .notNull(),
  facultyId: t
    .integer()
    .references(() => faculty.id)
    .notNull(),
  associateFacultyId: t.integer().references(() => faculty.id),
  staffIds: t
    .integer()
    .array()
    .default(sql`'{}'`)
    .notNull(),
  activityLogs: t
    .text()
    .array()
    .default(sql`'{}'`)
    .notNull(),
}));

export const deansRelations = relations(deans, ({ one }) => ({
  faculty: one(faculty, {
    fields: [deans.facultyId],
    references: [faculty.id],
  }),
  associateFaculty: one(faculty, {
    fields: [deans.associateFacultyId],
    references: [faculty.id],
  }),
}));
