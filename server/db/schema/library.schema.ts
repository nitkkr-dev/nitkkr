import { relations } from 'drizzle-orm';
import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';

import { faculty } from './faculty.schema';

export const libraryCommittee = pgTable('library_committee', {
  facultyId: integer('faculty_id')
    .references(() => faculty.id)
    .notNull()
    .primaryKey(),
  libraryCommitteeDesignation: varchar('library_committee_designation', {
    enum: ['member', 'chairman'],
  }).notNull(),
});

export const libraryCommitteeRelation = relations(
  libraryCommittee,
  ({ one }) => ({
    faculty: one(faculty, {
      fields: [libraryCommittee.facultyId],
      references: [faculty.id],
    }),
  })
);
