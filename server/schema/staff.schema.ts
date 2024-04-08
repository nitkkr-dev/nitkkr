import { relations, sql } from 'drizzle-orm';
import {
  integer,
  pgTable,
  smallint,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/pg-core';

import { departments, persons, sections } from '.';

export const staff = pgTable(
  'staff',
  {
    id: integer('id')
      .primaryKey()
      .references(() => persons.id),
    employeeId: varchar('employee_id', { length: 8 }).notNull(),
    telephone: varchar('telephone', { length: 13 })
      .array()
      .default(sql`'{}'`)
      .notNull(),
    workingSectionId: smallint('working_section_id')
      .references(() => sections.id)
      .notNull(),
    designation: varchar('designation').notNull(),
    workingDepartmentId: smallint('working_department_id')
      .references(() => departments.id)
      .notNull(),
  },
  (staff) => {
    return {
      staffEmployeeIdIndex: uniqueIndex('staff_employee_id_idx').on(
        staff.employeeId
      ),
    };
  }
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
