import { relations } from 'drizzle-orm';
import { pgTable } from 'drizzle-orm/pg-core';

import { students } from '.';

export const websiteContributors = pgTable('website_contributors', (t) => ({
  id: t.serial().primaryKey(),
  name: t.varchar({ length: 256 }).notNull(),
  rollNumber: t.varchar({ length: 20 }).notNull(),
  passoutYear: t.integer().notNull(),
  image: t.varchar({ length: 512 }),
  studentId: t.integer().references(() => students.id),
  linkedinId: t.varchar({ length: 512 }),
  githubId: t.varchar({ length: 512 }),
  designation: t.varchar({ enum: ['developer', 'designer', 'devops'] }),
  createdAt: t.timestamp().defaultNow().notNull(),
}));

export const websiteContributorsRelations = relations(
  websiteContributors,
  ({ one }) => ({
    student: one(students, {
      fields: [websiteContributors.studentId],
      references: [students.id],
    }),
  })
);
