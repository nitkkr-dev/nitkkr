import { relations } from 'drizzle-orm';
import { pgTable } from 'drizzle-orm/pg-core';

import { departments, faculty } from '.';

export const departmentHeads = pgTable('department_heads', (t) => ({
  id: t.smallserial().primaryKey(),
  facultyId: t
    .integer()
    .references(() => faculty.id)
    .notNull(),
  departmentId: t
    .smallint()
    .references(() => departments.id)
    .notNull(),
  message: t.text().notNull(),
  isActive: t.boolean().default(true).notNull(),
  createdOn: t.date({ mode: 'date' }).defaultNow().notNull(),
}));

export const departmentHeadsRelations = relations(
  departmentHeads,
  ({ one }) => ({
    department: one(departments, {
      fields: [departmentHeads.departmentId],
      references: [departments.id],
    }),
    faculty: one(faculty, {
      fields: [departmentHeads.facultyId],
      references: [faculty.id],
    }),
  })
);
