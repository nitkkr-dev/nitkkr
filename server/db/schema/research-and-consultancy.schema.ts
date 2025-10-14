// SrNo FacultyName Department TotalNoOfJobs totalAmount
import { relations } from 'drizzle-orm';
import { pgTable } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

import { faculty } from './faculty.schema';

export const researchAndConsultancy = pgTable(
  'research_and_consultancy',
  (t) => ({
    id: t.serial().primaryKey(),
    employeeId: t
      .varchar('employee_id') // 👈 maps to existing DB column
      .references(() => faculty.employeeId)
      .notNull(),
    totalNoOfJobs: t.integer('total_no_of_jobs').notNull(),
    totalAmount: t.varchar('total_amount', { length: 50 }).notNull(),
    year: t.varchar('year', { length: 9 }).notNull(),
  }),
  (t) => ({
    validYearFormat: sql`CHECK (${t.year} ~ '^[0-9]{4}-[0-9]{2}$')`,
  })
);

export const researchAndConsultancyRelations = relations(
  researchAndConsultancy,
  ({ one }) => ({
    faculty: one(faculty, {
      fields: [researchAndConsultancy.employeeId],
      references: [faculty.employeeId],
    }),
  })
);
