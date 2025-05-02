import { relations } from 'drizzle-orm';
import { pgTable } from 'drizzle-orm/pg-core';

import { courses, faculty, majors } from '.';

export const courseLogs = pgTable('course_logs', (t) => ({
  id: t.serial().primaryKey(),
  session: t.varchar().notNull(),
  courseId: t
    .smallint()
    .references(() => courses.id)
    .notNull(),
  facultyId: t
    .integer()
    .references(() => faculty.id)
    .notNull(),
  majorId: t
    .smallint()
    .references(() => majors.id)
    .notNull(),
  semester: t.smallint().notNull(),
  section: t.varchar().notNull(),
  subSection: t.smallint().notNull(),
}));

export const courseLogsRelations = relations(courseLogs, ({ one }) => ({
  course: one(courses, {
    fields: [courseLogs.courseId],
    references: [courses.id],
  }),
  faculty: one(faculty, {
    fields: [courseLogs.facultyId],
    references: [faculty.id],
  }),
  major: one(majors, {
    fields: [courseLogs.majorId],
    references: [majors.id],
  }),
}));
