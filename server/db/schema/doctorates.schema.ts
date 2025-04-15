import { relations } from 'drizzle-orm';
import { pgTable } from 'drizzle-orm/pg-core';

import { departments, faculty, students } from '.';

export const doctorates = pgTable('doctorates', (t) => ({
  id: t.smallserial().primaryKey(),
  registrationNumber: t.varchar({ length: 16 }).unique().notNull(),
  departmentId: t
    .smallint()
    .references(() => departments.id)
    .notNull(),
  studentId: t
    .integer()
    .references(() => students.id)
    .notNull(),
  supervisorId: t
    .varchar()
    .references(() => faculty.employeeId)
    .notNull(),
  type: t.varchar({ enum: ['part-time', 'full-time'] }).notNull(),
  title: t.varchar({ length: 256 }).notNull(),
  createdOn: t.date({ mode: 'date' }).defaultNow().notNull(),
  endedOn: t.date({ mode: 'date' }),
}));

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
    references: [faculty.employeeId],
  }),
}));
