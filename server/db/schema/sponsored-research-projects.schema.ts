import { relations } from 'drizzle-orm';
import { pgTable } from 'drizzle-orm/pg-core';

import { faculty } from '.';

export const sponsoredResearchProjects = pgTable(
  'sponsored_research_projects',
  (t) => ({
    id: t.serial().primaryKey(),
    title: t.varchar().notNull(),
    fundingAgency: t.varchar().notNull(),
    facultyId: t
      .integer()
      .references(() => faculty.id)
      .notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    amount: t.bigint({ mode: 'number' }).notNull(),
    status: t.varchar().default('on-going').notNull(),
    durationPeriod: t.varchar().notNull(),
    durationPeriodType: t.varchar().notNull(),
    createdOn: t.date({ mode: 'date' }).defaultNow().notNull(),
    endedOn: t.date({ mode: 'date' }),
  })
);

export const sponsoredResearchProjectsRelations = relations(
  sponsoredResearchProjects,
  ({ one }) => ({
    faculty: one(faculty, {
      fields: [sponsoredResearchProjects.facultyId],
      references: [faculty.id],
    }),
  })
);
