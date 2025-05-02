import { relations, sql } from 'drizzle-orm';
import { pgTable } from 'drizzle-orm/pg-core';

import { majors, students } from '.';

export const studentAcademicDetails = pgTable(
  'student_academic_details',
  (t) => ({
    id: t
      .integer()
      .primaryKey()
      .references(() => students.id)
      .notNull(),
    batch: t.smallint().notNull(),
    section: t.varchar().notNull(),
    subSection: t.smallint().notNull(),
    // Current semester is kept for cases where a student repeats an AY
    currentSemester: t.smallint().notNull(),
    sgpa: t.doublePrecision().notNull(),
    cgpa: t.doublePrecision().notNull(),
    dmcUrls: t
      .text()
      .array()
      .default(sql`'{}'`)
      .notNull(),
    majorId: t
      .smallint()
      .references(() => majors.id)
      .notNull(),
  })
);

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
