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
  batch: smallint('batch').notNull(),
  section: varchar('section').notNull(),
  subSection: smallint('sub_section').notNull(),
  // Current semester is kept for cases where a student repeats an AY
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
