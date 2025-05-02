import { relations } from 'drizzle-orm';
import { pgTable, uniqueIndex } from 'drizzle-orm/pg-core';

import { departments, persons, sections } from '.';

export const staff = pgTable(
  'staff',
  (t) => ({
    id: t
      .integer()
      .primaryKey()
      .references(() => persons.id),
    employeeId: t.varchar({ length: 8 }).notNull(),
    workingSectionId: t
      .smallint()
      .references(() => sections.id)
      .notNull(),
    designation: t.varchar().notNull(),
    workingDepartmentId: t
      .smallint()
      .references(() => departments.id)
      .notNull(),
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
}));
