import { relations, sql } from 'drizzle-orm';
import { pgTable } from 'drizzle-orm/pg-core';

import {
  courseLogs,
  coursesToMajors,
  departments,
  studentAcademicDetails,
} from '.';

export const majors = pgTable('majors', (t) => ({
  id: t.smallserial().primaryKey(),
  name: t.varchar({ length: 64 }).notNull(),
  degree: t
    .varchar({
      enum: ['B. Tech.', 'M. Tech.', 'MCA', 'MBA', 'M. Sc.', 'Ph. D.'],
    })
    .notNull(),
  departmentId: t
    .smallint()
    .references(() => departments.id)
    .notNull(),
  objectives: t
    .text()
    .array()
    .default(sql`'{}'`)
    .notNull(),
  educationalObjectives: t
    .text()
    .array()
    .default(sql`'{}'`)
    .notNull(),
}));

export const majorsRelations = relations(majors, ({ many, one }) => ({
  courseLogs: many(courseLogs),
  coursesToMajors: many(coursesToMajors),
  department: one(departments, {
    fields: [majors.departmentId],
    references: [departments.id],
  }),
  studentAcademicDetails: many(studentAcademicDetails),
}));
