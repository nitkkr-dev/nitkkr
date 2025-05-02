import { relations } from 'drizzle-orm';
import { pgTable } from 'drizzle-orm/pg-core';

import { courses, majors } from '.';

export const coursesToMajors = pgTable('courses_to_majors', (t) => ({
  id: t.smallserial().primaryKey(),
  courseId: t
    .smallint()
    .references(() => courses.id)
    .notNull(),
  majorId: t
    .smallint()
    .references(() => majors.id)
    .notNull(),
  semester: t.smallint().notNull(),
  lectureCredits: t.smallint().notNull(),
  tutorialCredits: t.smallint().notNull(),
  practicalCredits: t.smallint().notNull(),
}));

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
