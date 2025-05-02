import { relations } from 'drizzle-orm';
import { pgTable } from 'drizzle-orm/pg-core';

import { faculty, staff } from '.';

export const sections = pgTable('sections', (t) => ({
  id: t.smallserial().primaryKey(),
  name: t.varchar({ length: 100 }).notNull(),
  urlName: t.varchar({ length: 100 }).notNull(),
  email: t.varchar({ length: 256 }).notNull(),
  aboutUs: t.varchar().notNull(),
  headFacultyId: t
    .integer()
    .references(() => faculty.id)
    .notNull(),
}));

export const sectionsRelations = relations(sections, ({ many, one }) => ({
  headFaculty: one(faculty, {
    fields: [sections.headFacultyId],
    references: [faculty.id],
  }),
  staff: many(staff),
}));
