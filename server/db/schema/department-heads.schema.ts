import { relations } from 'drizzle-orm';
import {
  boolean,
  date,
  integer,
  pgTable,
  smallint,
  smallserial,
  text,
} from 'drizzle-orm/pg-core';

import { departments, faculty } from '.';

export const departmentHeads = pgTable('department_heads', {
  id: smallserial('id').primaryKey(),
  facultyId: integer('faculty_id')
    .references(() => faculty.id)
    .notNull(),
  departmentId: smallint('department_id')
    .references(() => departments.id)
    .notNull(),
  message: text('message').notNull(),
  isActive: boolean('is_active').default(true).notNull(),
  createdOn: date('created_on', { mode: 'date' }).defaultNow().notNull(),
});

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
