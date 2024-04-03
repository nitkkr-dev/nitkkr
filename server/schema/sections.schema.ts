import { relations } from 'drizzle-orm';
import { integer, pgTable, smallserial, varchar } from 'drizzle-orm/pg-core';

import { faculty, staff } from '.';

export const sections = pgTable('sections', {
  id: smallserial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  aboutUs: varchar('about_us').notNull(),
  headFacultyId: integer('head_faculty_id')
    .references(() => faculty.id)
    .notNull(),
});

export const sectionsRelations = relations(sections, ({ many, one }) => ({
  headFaculty: one(faculty, {
    fields: [sections.headFacultyId],
    references: [faculty.id],
  }),
  staff: many(staff),
}));
