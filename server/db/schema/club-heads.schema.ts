import { relations } from 'drizzle-orm';
import { integer, pgTable, serial } from 'drizzle-orm/pg-core';

import { clubs } from '.';
import { faculty } from '.';

export const clubHeads = pgTable('club_heads', {
  id: serial('id').primaryKey(),
  clubId: integer('club_id')
    .references(() => clubs.id)
    .notNull(),
  facultyId: integer('faculty_id')
    .references(() => faculty.id)
    .notNull(),
});

export const clubHeadsRelations = relations(clubHeads, ({ one }) => ({
  club: one(clubs, {
    fields: [clubHeads.clubId],
    references: [clubs.id],
  }),
  faculty: one(faculty, {
    fields: [clubHeads.facultyId],
    references: [faculty.id],
  }),
}));
