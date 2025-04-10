import { relations } from 'drizzle-orm';
import { integer, pgTable, smallserial } from 'drizzle-orm/pg-core';

import { faculty, sections } from '.';

export const sectionHeads = pgTable('section_head_faculty', {
  id: smallserial('id').primaryKey(),
  sectionId: integer('section_id').references(() => sections.id),
  facultyId: integer('faculty_id').references(() => faculty.id),
});

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
