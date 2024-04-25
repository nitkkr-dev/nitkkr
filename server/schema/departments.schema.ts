import { relations } from 'drizzle-orm';
import { char, pgTable, smallserial, text, varchar } from 'drizzle-orm/pg-core';

import { clubs, courses, doctorates, faculty, majors, staff } from '.';

export const departments = pgTable('departments', {
  id: smallserial('id').primaryKey(),
  name: varchar('name', { length: 64 }).notNull(),
  urlName: varchar('url_name', { length: 64 }).notNull(),
  alias: char('alias', { length: 2 }).notNull(),
  type: varchar('type', {
    enum: ['engineering', 'science', 'school', 'miscellaneous'],
  }).notNull(),
  about: text('about').notNull(),
  vision: text('vision').notNull(),
  mission: text('mission').notNull(),
  laboratories: text('laboratories'),
});

export const departmentsRelations = relations(departments, ({ many }) => ({
  clubs: many(clubs),
  courses: many(courses),
  doctorates: many(doctorates),
  faculty: many(faculty),
  majors: many(majors),
  staff: many(staff),
}));
