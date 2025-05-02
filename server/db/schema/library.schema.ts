import { relations } from 'drizzle-orm';
import { pgTable } from 'drizzle-orm/pg-core';

import { faculty } from './faculty.schema';

export const libraryCommittee = pgTable('library_committee', (t) => ({
  facultyId: t
    .integer()
    .references(() => faculty.id)
    .notNull()
    .primaryKey(),
  libraryCommitteeDesignation: t
    .varchar({ enum: ['member', 'chairman'] })
    .notNull(),
}));

export const libraryCommitteeRelation = relations(
  libraryCommittee,
  ({ one }) => ({
    faculty: one(faculty, {
      fields: [libraryCommittee.facultyId],
      references: [faculty.id],
    }),
  })
);
