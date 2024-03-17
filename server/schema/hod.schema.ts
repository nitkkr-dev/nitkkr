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

export const hod = pgTable('hod', {
  id: smallserial('id').primaryKey(),
  facultyId: integer('faculty_id')
    .references(() => faculty.id)
    .notNull(),
  departmentId: smallint('department_id')
    .references(() => departments.id)
    .notNull(),
  message: text('message'),
  isActive: boolean('is_active').default(true).notNull(),
  createdOn: date('created_on').defaultNow().notNull(),
});

export const hodRelations = relations(hod, ({ one }) => ({
  department: one(departments, {
    fields: [hod.departmentId],
    references: [departments.id],
  }),
  faculty: one(faculty, {
    fields: [hod.facultyId],
    references: [faculty.id],
  }),
}));
