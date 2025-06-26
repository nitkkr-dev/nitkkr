import { relations, sql } from 'drizzle-orm';
import { pgTable } from 'drizzle-orm/pg-core';

import { courseLogs, coursesToMajors, departments, faculty } from '.';

export const courses = pgTable('courses', (t) => ({
  id: t.smallserial().primaryKey(),
  code: t.varchar({ length: 8 }).unique().notNull(),
  title: t.varchar({ length: 128 }).notNull(),
  coordinatorId: t
    .integer()
    .references(() => faculty.id)
    .notNull(),
  departmentId: t
    .smallint()
    .references(() => departments.id)
    .notNull(),
  prerequisites: t
    .varchar({ length: 8 })
    .array()
    .default(sql`'{}'`)
    .notNull(),
  nature: t.char({ length: 20 }).notNull(),
  objectives: t
    .text()
    .array()
    .default(sql`'{}'`)
    .notNull(),
  content: t.json().$type<{ title: string; topics: string[] }[]>().notNull(),
  outcomes: t
    .text()
    .array()
    .default(sql`'{}'`)
    .notNull(),
  essentialReading: t
    .text()
    .array()
    .default(sql`'{}'`)
    .notNull(),
  supplementaryReading: t
    .text()
    .array()
    .default(sql`'{}'`)
    .notNull(),
  similarCourses: t
    .varchar({ length: 8 })
    .array()
    .default(sql`'{}'`)
    .notNull(),
}));

export const coursesRelations = relations(courses, ({ many, one }) => ({
  coordinator: one(faculty, {
    fields: [courses.coordinatorId],
    references: [faculty.id],
  }),
  courseLogs: many(courseLogs),
  coursesToMajors: many(coursesToMajors),
  department: one(departments, {
    fields: [courses.departmentId],
    references: [departments.id],
  }),
}));
