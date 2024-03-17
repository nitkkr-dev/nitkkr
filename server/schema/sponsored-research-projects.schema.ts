import { relations } from 'drizzle-orm';
import {
  bigint,
  date,
  integer,
  pgTable,
  serial,
  varchar,
} from 'drizzle-orm/pg-core';

import { faculty } from '.';

export const sponsoredResearchProjects = pgTable(
  'sponsored_research_projects',
  {
    id: serial('id').primaryKey(),
    title: varchar('title').notNull(),
    fundingAgency: varchar('funding_agency').notNull(),
    facultyId: integer('faculty_id')
      .references(() => faculty.id)
      .notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    amount: bigint('amount', { mode: 'number' }).notNull(),
    status: varchar('status').default('on-going').notNull(),
    durationPeriod: varchar('duration_period').notNull(),
    durationPeriodType: varchar('duration_period_type').notNull(),
    createdOn: date('created_on').defaultNow().notNull(),
    endedOn: date('ended_on'),
  }
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
