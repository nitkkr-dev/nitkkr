import { relations, sql } from 'drizzle-orm';
import { pgTable, uniqueIndex } from 'drizzle-orm/pg-core';

import {
  courseLogs,
  courses,
  departments,
  doctorates,
  persons,
  sections,
  sponsoredResearchProjects,
} from '.';

export const faculty = pgTable(
  'faculty',
  (t) => ({
    id: t
      .integer()
      .primaryKey()
      .references(() => persons.id),
    employeeId: t.varchar({ length: 8 }).notNull(),
    officeAddress: t.varchar({ length: 16 }).notNull(),

    // Meta
    designation: t
      .varchar({
        enum: [
          'Assistant Professor Grade-I',
          'Assistant Professor Grade-II',
          'Associate Professor',
          'Professor',
        ],
      })
      .notNull(),
    departmentId: t
      .smallint()
      .references(() => departments.id)
      .notNull(),

    // Socials
    googleScholarId: t.text(),
    orcidId: t.text(),
    researchGateId: t.text(),
    scopusId: t.text(),

    // Miscellaneous
    qualifications: t
      .text()
      .array()
      .default(sql`'{}'`)
      .notNull(),
    areasOfInterest: t
      .text()
      .array()
      .default(sql`'{}'`)
      .notNull(),
    teachingInterests: t
      .text()
      .array()
      .default(sql`'{}'`)
      .notNull(),
    researchInterests: t
      .text()
      .array()
      .default(sql`'{}'`)
      .notNull(),
    patents: t
      .text()
      .array()
      .default(sql`'{}'`)
      .notNull(),
    copyrights: t
      .text()
      .array()
      .default(sql`'{}'`)
      .notNull(),
    publications: t
      .text()
      .array()
      .default(sql`'{}'`)
      .notNull(),
    journals: t
      .text()
      .array()
      .default(sql`'{}'`)
      .notNull(),
    conferences: t
      .text()
      .array()
      .default(sql`'{}'`)
      .notNull(),
    books: t
      .text()
      .array()
      .default(sql`'{}'`)
      .notNull(),
    workshops: t
      .text()
      .array()
      .default(sql`'{}'`)
      .notNull(),
    expertLectures: t
      .text()
      .array()
      .default(sql`'{}'`)
      .notNull(),
    awards: t
      .text()
      .array()
      .default(sql`'{}'`)
      .notNull(),
    outreach: t
      .text()
      .array()
      .default(sql`'{}'`)
      .notNull(),
    eContent: t
      .text()
      .array()
      .default(sql`'{}'`)
      .notNull(),
    researchProjects: t
      .text()
      .array()
      .default(sql`'{}'`)
      .notNull(),
  }),
  (table) => [uniqueIndex('faculty_employee_id_idx').on(table.employeeId)]
);

export const facultyRelations = relations(faculty, ({ many, one }) => ({
  courseLogs: many(courseLogs),
  courses: many(courses),
  department: one(departments, {
    fields: [faculty.departmentId],
    references: [departments.id],
  }),
  doctorates: many(doctorates),
  sections: many(sections),
  sponsoredResearchProjects: many(sponsoredResearchProjects),
  person: one(persons, {
    fields: [faculty.id],
    references: [persons.id],
  }),
}));
