import { relations } from 'drizzle-orm';
import { pgTable } from 'drizzle-orm/pg-core';

import { faculty, sections } from '.';

export const sectionHeads = pgTable('section_head_faculty', (t) => ({
  id: t.smallserial().primaryKey(),
  sectionId: t
    .integer()
    .references(() => sections.id)
    .notNull(),
  facultyId: t
    .integer()
    .references(() => faculty.id)
    .notNull(),
}));

export const sectionHeadFacultyRelations = relations(
  sectionHeads,
  ({ one }) => ({
    section: one(sections, {
      fields: [sectionHeads.sectionId],
      references: [sections.id],
    }),
    faculty: one(faculty, {
      fields: [sectionHeads.facultyId],
      references: [faculty.id],
    }),
  })
);
