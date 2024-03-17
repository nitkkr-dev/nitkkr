import { relations } from 'drizzle-orm';
import {
  integer,
  pgTable,
  serial,
  smallint,
  varchar,
} from 'drizzle-orm/pg-core';

import { courses, faculty, majors } from '.';

export const courseLogs = pgTable('course_logs', {
  id: serial('id').primaryKey(),
  session: varchar('session').notNull(),
  courseId: smallint('course_id')
    .references(() => courses.id)
    .notNull(),
  facultyId: integer('faculty_id')
    .references(() => faculty.id)
    .notNull(),
  majorId: smallint('major_id')
    .references(() => majors.id)
    .notNull(),
  semester: smallint('semester').notNull(),
  section: varchar('section').notNull(),
  subSection: smallint('sub_section').notNull(),
});

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
