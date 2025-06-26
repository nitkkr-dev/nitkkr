import { relations } from 'drizzle-orm';
import { pgTable, uniqueIndex } from 'drizzle-orm/pg-core';

import { deans, departments, persons, sections } from '.';

export const staff = pgTable(
  'staff',
  (t) => ({
    id: t
      .integer()
      .primaryKey()
      .references(() => persons.id),
    employeeId: t.varchar({ length: 8 }).notNull(),
    personalEmail: t.varchar({ length: 256 }),
    designation: t.varchar({ length: 64 }).notNull(),
    workingOfficeType: t.varchar({
      enum: ['department', 'section', 'deans'],
    }),
    workingDepartmentId: t.smallint().references(() => departments.id),
    workingSectionId: t.smallint().references(() => sections.id),
    workingDeanOfficeId: t.smallint().references(() => deans.id),
  }),
  (table) => [uniqueIndex('staff_employee_id_idx').on(table.employeeId)]
);

export const staffRelations = relations(staff, ({ one }) => ({
  department: one(departments, {
    fields: [staff.workingDepartmentId],
    references: [departments.id],
  }),
  person: one(persons, {
    fields: [staff.id],
    references: [persons.id],
  }),
  section: one(sections, {
    fields: [staff.workingSectionId],
    references: [sections.id],
  }),
  deans: one(deans, {
    fields: [staff.workingDeanOfficeId],
    references: [deans.id],
  }),
}));
