import { relations } from 'drizzle-orm';
import { pgTable, smallint, smallserial } from 'drizzle-orm/pg-core';

import { courses, majors } from '.';

export const coursesToMajors = pgTable('courses_to_majors', {
  id: smallserial('id').primaryKey(),
  courseId: smallint('course_id')
    .references(() => courses.id)
    .notNull(),
  majorId: smallint('major_id')
    .references(() => majors.id)
    .notNull(),
  semester: smallint('semester').notNull(),
  lectureCredits: smallint('lecture_credits').notNull(),
  tutorialCredits: smallint('tutorial_credits').notNull(),
  practicalCredits: smallint('practical_credits').notNull(),
});

export const coursesToMajorsRelations = relations(
  coursesToMajors,
  ({ one }) => ({
    course: one(courses, {
      fields: [coursesToMajors.courseId],
      references: [courses.id],
    }),
    major: one(majors, {
      fields: [coursesToMajors.majorId],
      references: [majors.id],
    }),
  })
);
