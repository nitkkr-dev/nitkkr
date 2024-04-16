import { relations, sql } from 'drizzle-orm';
import {
  integer,
  pgTable,
  smallserial,
  text,
  varchar,
} from 'drizzle-orm/pg-core';

import { faculty } from '.';

export const deans = pgTable('deans', {
  id: smallserial('id').primaryKey(),
  domain: varchar('domain', {
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
  facultyId: integer('faculty_id')
    .references(() => faculty.id)
    .notNull(),
  associateFacultyId: integer('associate_faculty_id').references(
    () => faculty.id
  ),
  staffIds: integer('staff_ids')
    .array()
    .default(sql`'{}'`)
    .notNull(),
  activityLogs: text('activity_logs')
    .array()
    .default(sql`'{}'`)
    .notNull(),
});

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
