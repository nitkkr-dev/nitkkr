import { relations, sql } from 'drizzle-orm';
import {
  doublePrecision,
  integer,
  pgTable,
  smallint,
  text,
  varchar,
} from 'drizzle-orm/pg-core';

import { majors, students } from '.';

export const studentAcademicDetails = pgTable('student_academic_details', {
  id: integer('id')
    .primaryKey()
    .references(() => students.id)
    .notNull(),
  section: varchar('section').notNull(),
  batch: smallint('batch').notNull(),
  currentSemester: smallint('current_semester').notNull(),
  sgpa: doublePrecision('sgpa').notNull(),
  cgpa: doublePrecision('cgpa').notNull(),
  dmcUrls: text('dmc_urls')
    .array()
    .default(sql`'{}'`)
    .notNull(),
  majorId: smallint('major_id')
    .references(() => majors.id)
    .notNull(),
  subSection: integer('sub_section').notNull(),
});

export const studentAcademicDetailsRelations = relations(
  studentAcademicDetails,
  ({ one }) => ({
    major: one(majors, {
      fields: [studentAcademicDetails.majorId],
      references: [majors.id],
    }),
    student: one(students, {
      fields: [studentAcademicDetails.id],
      references: [students.id],
    }),
  })
);
