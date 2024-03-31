import { relations } from 'drizzle-orm';
import {
  date,
  integer,
  pgTable,
  smallint,
  serial,
  varchar,
} from 'drizzle-orm/pg-core';

import { departments, faculty, students } from '.';

export const doctorates = pgTable('doctorates', {
  id: serial('id').primaryKey(),
  registrationNumber: varchar('registration_number', { length: 16 })
    .unique()
    .notNull(),
  departmentId: smallint('department_id')
    .references(() => departments.id)
    .notNull(),
  studentId: integer('student_id')
    .references(() => students.id)
    .notNull(),
  supervisorId: integer('supervisor_id')
    .references(() => faculty.id)
    .notNull(),
  type: varchar('type', { enum: ['part-time', 'full-time'] }).notNull(),
  title: varchar('title', { length: 256 }).notNull(),
  createdOn: date('created_on').defaultNow().notNull(),
  endedOn: date('ended_on'),
});

export const doctoratesRelations = relations(doctorates, ({ one }) => ({
  department: one(departments, {
    fields: [doctorates.departmentId],
    references: [departments.id],
  }),
  student: one(students, {
    fields: [doctorates.studentId],
    references: [students.id],
  }),
  supervisor: one(faculty, {
    fields: [doctorates.supervisorId],
    references: [faculty.id],
  }),
}));
