import { relations, sql } from 'drizzle-orm';
import { pgTable } from 'drizzle-orm/pg-core';

import { clubs, persons, students } from '.';

export const clubMembers = pgTable('club_members', (t) => ({
  id: t.serial().primaryKey(),
  studentId: t
    .integer()
    .references(() => students.id)
    .notNull(),
  clubId: t
    .smallint()
    .references(() => clubs.id)
    .notNull(),
  position: t.varchar({ length: 32 }).default('member').notNull(),
  internalGroups: t
    .varchar({ length: 32 })
    .array()
    .default(sql`'{}'`),
  comments: t.text(),
  createdAt: t.timestamp().defaultNow().notNull(),
  updatedAt: t
    .timestamp()
    .$onUpdate(() => new Date())
    .notNull(),
  updatedBy: t
    .integer()
    .references(() => persons.id)
    .notNull(),
}));

export const clubMembersRelations = relations(clubMembers, ({ one }) => ({
  club: one(clubs, {
    fields: [clubMembers.clubId],
    references: [clubs.id],
  }),
  student: one(students, {
    fields: [clubMembers.studentId],
    references: [students.id],
  }),
}));
