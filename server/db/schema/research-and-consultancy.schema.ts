// SrNo FacultyName Department TotalNoOfJobs totalAmount

import { pgTable } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

import { faculty } from './faculty.schema';

export const researchAndConsultancy = pgTable(
  'research_and_consultancy',
  (t) => ({
    id: t.serial().primaryKey(),
    facultyId: t
      .varchar()
      .references(() => faculty.employeeId)
      .notNull(),
    totalNoOfJobs: t.integer().notNull(),
    totalAmount: t.varchar({ length: 50 }).notNull(),
    year: t.varchar({ length: 9 }).notNull(), // store the "2023-24"
  }),
  (t) => ({
    // pattern check for the academic year format
    validYearFormat: sql`CHECK (${t.year} ~ '^[0-9]{4}-[0-9]{2}$')`,
  })
);
