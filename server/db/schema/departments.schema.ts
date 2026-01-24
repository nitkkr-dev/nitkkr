import { relations } from 'drizzle-orm';
import { pgTable } from 'drizzle-orm/pg-core';

import { clubs, courses, doctorates, faculty, majors, staff } from '.';
import { eventDepartments } from './events.schema';
import { notificationDepartments } from './notifications.schema';

export const departments = pgTable('departments', (t) => ({
  id: t.smallserial().primaryKey(),
  name: t.varchar({ length: 64 }).notNull(),
  urlName: t.varchar({ length: 64 }).notNull(),
  alias: t.char({ length: 2 }).notNull(),
  type: t
    .varchar({ enum: ['engineering', 'science', 'school', 'miscellaneous'] })
    .notNull(),
  about: t.text().notNull(),
  vision: t.text().notNull(),
  mission: t.text().notNull(),
  laboratories: t.text(),
}));

export const departmentsRelations = relations(departments, ({ many }) => ({
  clubs: many(clubs),
  courses: many(courses),
  doctorates: many(doctorates),
  faculty: many(faculty),
  majors: many(majors),
  staff: many(staff),
  eventDepartments: many(eventDepartments),
  notificationDepartments: many(notificationDepartments),
}));
