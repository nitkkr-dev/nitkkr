import { relations } from 'drizzle-orm';
import { pgTable } from 'drizzle-orm/pg-core';

import { faculty } from '.';

export const researchProjects = pgTable('research_projects', (t) => ({
  id: t.serial().primaryKey(),
  title: t.varchar().notNull(),
  fundingAgency: t.varchar().notNull(),
  facultyId: t
    .varchar()
    .references(() => faculty.employeeId)
    .notNull(),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  amount: t.bigint({ mode: 'number' }).notNull(),
  role: t.varchar().notNull(),
  status: t.varchar().default('on-going').notNull(),
  durationPeriod: t.varchar().notNull(),
  durationPeriodType: t.varchar().notNull(),
  createdOn: t.date({ mode: 'date' }).defaultNow().notNull(),
  endedOn: t.date({ mode: 'date' }),
  tag: t
    .varchar({
      enum: ['project', 'consultancy'],
    })
    .notNull(),
}));

export const researchProjectsRelations = relations(
  researchProjects,
  ({ one }) => ({
    faculty: one(faculty, {
      fields: [researchProjects.facultyId],
      references: [faculty.employeeId],
    }),
  })
);
