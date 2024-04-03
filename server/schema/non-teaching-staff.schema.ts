import { relations, sql } from 'drizzle-orm';
import {
  integer,
  pgTable,
  smallint,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/pg-core';

import { departments, persons, sections } from '.';

export const nonTeachingStaff = pgTable(
  'non_teaching_staff',
  {
    id: integer('id')
      .primaryKey()
      .references(() => persons.id),
    employee_id: varchar('employee_id', { length: 8 }).notNull(),
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
  (nonTeachingStaff) => {
    return {
      nonTeachingStaffEmployeeIdIndex: uniqueIndex(
        'non_teaching_staff_employee_id_idx'
      ).on(nonTeachingStaff.employee_id),
    };
  }
);

export const nonTeachingStaffRelations = relations(
  nonTeachingStaff,
  ({ one }) => ({
    department: one(departments, {
      fields: [nonTeachingStaff.workingDepartmentId],
      references: [departments.id],
    }),
    person: one(persons, {
      fields: [nonTeachingStaff.id],
      references: [persons.id],
    }),
    section: one(sections, {
      fields: [nonTeachingStaff.workingSectionId],
      references: [sections.id],
    }),
  })
);
