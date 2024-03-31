import { relations, sql } from 'drizzle-orm';
import { char, pgTable, smallserial, text, varchar } from 'drizzle-orm/pg-core';

import {
  clubs,
  courses,
  doctorates,
  faculty,
  majors,
  nonTeachingStaff,
} from '.';

export const departments = pgTable('departments', {
  id: smallserial('id').primaryKey(),
  name: varchar('name', { length: 64 }).notNull(),
  alias: char('alias', { length: 4 }).notNull(),
  type: varchar('type', {
    enum: ['engineering', 'science', 'school'],
  }).notNull(),
  about: text('about').notNull(),
  laboratories: text('laboratories'),
  photos: text('photos')
    .array()
    .default(sql`'{}'`)
    .notNull(),
  vision: text('vision').notNull(),
  mission: text('mission').notNull(),
});

export const departmentsRelations = relations(departments, ({ many }) => ({
  clubs: many(clubs),
  courses: many(courses),
  doctorates: many(doctorates),
  faculty: many(faculty),
  majors: many(majors),
  nonTeachingStaff: many(nonTeachingStaff),
}));
