import { relations, sql } from 'drizzle-orm';
import {
  pgTable,
  smallint,
  smallserial,
  text,
  varchar,
} from 'drizzle-orm/pg-core';

import { coursesToMajors, departments } from '.';

export const majors = pgTable('majors', {
  id: smallserial('id').primaryKey(),
  name: varchar('name', { length: 64 }).notNull(),
  degree: varchar('degree', {
    enum: ['B. Tech.', 'M. Tech.', 'MCA', 'MBA', 'M. Sc.', 'Ph. D.'],
  }).notNull(),
  departmentId: smallint('department_id')
    .references(() => departments.id)
    .notNull(),
  objectives: text('objectives')
    .array()
    .default(sql`'{}'`)
    .notNull(),
  educationalObjectives: text('educational_objectives')
    .array()
    .default(sql`'{}'`)
    .notNull(),
});

export const majorsRelations = relations(majors, ({ many, one }) => ({
  coursesToMajors: many(coursesToMajors),
  department: one(departments, {
    fields: [majors.departmentId],
    references: [departments.id],
  }),
}));
