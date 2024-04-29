import { relations, sql } from 'drizzle-orm';
import {
  integer,
  pgTable,
  serial,
  smallint,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

import { clubs, persons, students } from '.';

export const clubMembers = pgTable('club_members', {
  id: serial('id').primaryKey(),
  studentId: integer('student_id')
    .references(() => students.id)
    .notNull(),
  clubId: smallint('club_id')
    .references(() => clubs.id)
    .notNull(),
  position: varchar('position', { length: 32 }).default('member').notNull(),
  internalGroups: varchar('internal_groups', { length: 32 })
    .array()
    .default(sql`'{}'`),
  comments: text('comments'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .$onUpdate(() => new Date())
    .notNull(),
  updatedBy: integer('updated_by')
    .references(() => persons.id)
    .notNull(),
});

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
