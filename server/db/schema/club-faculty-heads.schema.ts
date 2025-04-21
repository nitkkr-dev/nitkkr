import { relations } from 'drizzle-orm';
import { integer, pgTable, serial } from 'drizzle-orm/pg-core';

import { clubs } from '.';
import { faculty } from '.';

export const clubFacultyHeads = pgTable('club_faculty_heads', {
  id: serial('id').primaryKey(),
  clubId: integer('club_id')
    .references(() => clubs.id)
    .notNull(),
  facultyId: integer('faculty_id')
    .references(() => faculty.id)
    .notNull(),
});

export const clubFacultyHeadsRelations = relations(clubFacultyHeads, ({ one }) => ({
    club: one(clubs, {
      fields: [clubFacultyHeads.clubId],
      references: [clubs.id],
    }),
    faculty: one(faculty, {
      fields: [clubFacultyHeads.facultyId],
      references: [faculty.id],
    }),
}));
