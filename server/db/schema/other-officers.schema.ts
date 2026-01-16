import { pgEnum, pgTable } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

import { faculty } from './faculty.schema';

export const officerCategoryEnum = pgEnum('officer_category', [
  'head-of-department',
  'chairman',
  'professor-in-charge',
  'faculty-in-charge',
  'faculty-in-charge-student-club',
  'members-library-committee',
  'members-institute-handbook',
  'members-sports-committee',
  'members-admission-committee',
  'members-grievance-cell',
  'members-canteen-committee',
  'members-clubs-committee',
  'members-proctorial-board',
  'members-examination-committee',
  'members-disciplinary-committee',
  'members-anti-ragging-committee',
  'members-nirf-nba-naac',
  'coordinator',
  'co-coordinator',
  'nodal-officer',
]);

export const officers = pgTable('officers', (t) => ({
  id: t.serial('id').primaryKey(),
  designation: t.varchar('designation', { length: 256 }).notNull(),
  facultyId: t
    .integer('faculty_id')
    .notNull()
    .references(() => faculty.id),
  category: officerCategoryEnum('category').notNull(),
  createdAt: t.timestamp('created_at').defaultNow().notNull(),
  updatedAt: t
    .timestamp('updated_at')
    .$onUpdate(() => new Date())
    .notNull(),
}));

export const officersRelations = relations(officers, ({ one }) => ({
  faculty: one(faculty, {
    fields: [officers.facultyId],
    references: [faculty.id],
  }),
}));
