import { relations, sql } from 'drizzle-orm';
import {
  integer,
  pgTable,
  smallint,
  text,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/pg-core';

import {
  courseLogs,
  courses,
  departments,
  doctorates,
  persons,
  sections,
  sponsoredResearchProjects,
} from '.';
import { clubHeads } from './club-heads.schema';

export const faculty = pgTable(
  'faculty',
  {
    id: integer('id')
      .primaryKey()
      .references(() => persons.id),
    employeeId: varchar('employee_id', { length: 8 }).notNull(),
    officeAddress: varchar('college_address', { length: 16 }).notNull(),

    // Meta
    designation: varchar('designation', {
      enum: [
        'Assistant Professor Grade-I',
        'Assistant Professor Grade-II',
        'Associate Professor',
        'Professor',
      ],
    }).notNull(),
    departmentId: smallint('department_id')
      .references(() => departments.id)
      .notNull(),

    // Socials
    googleScholarId: text('google_scholar_id'),
    orcidId: text('orcid_id'),
    researchGateId: text('research_gate_id'),
    scopusId: text('scopus_id'),

    // Miscellaneous
    qualifications: text('qualifications')
      .array()
      .default(sql`'{}'`)
      .notNull(),
    areasOfInterest: text('areas_of_interest')
      .array()
      .default(sql`'{}'`)
      .notNull(),
    teachingInterests: text('teaching_interests')
      .array()
      .default(sql`'{}'`)
      .notNull(),
    researchInterests: text('research_interests')
      .array()
      .default(sql`'{}'`)
      .notNull(),
    patents: text('patents')
      .array()
      .default(sql`'{}'`)
      .notNull(),
    copyrights: text('copyrights')
      .array()
      .default(sql`'{}'`)
      .notNull(),
    publications: text('publications')
      .array()
      .default(sql`'{}'`)
      .notNull(),
    journals: text('journals')
      .array()
      .default(sql`'{}'`)
      .notNull(),
    conferences: text('conferences')
      .array()
      .default(sql`'{}'`)
      .notNull(),
    books: text('books')
      .array()
      .default(sql`'{}'`)
      .notNull(),
    workshops: text('workshops')
      .array()
      .default(sql`'{}'`)
      .notNull(),
    expertLectures: text('expert_lectures')
      .array()
      .default(sql`'{}'`)
      .notNull(),
    awards: text('awards')
      .array()
      .default(sql`'{}'`)
      .notNull(),
    outreach: text('outreach')
      .array()
      .default(sql`'{}'`)
      .notNull(),
    eContent: text('e_content')
      .array()
      .default(sql`'{}'`)
      .notNull(),
    researchProjects: text('research_projects')
      .array()
      .default(sql`'{}'`)
      .notNull(),
  },
  (faculty) => {
    return {
      facultyEmployeeIdIndex: uniqueIndex('faculty_employee_id_idx').on(
        faculty.employeeId
      ),
    };
  }
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
  clubHeads: many(clubHeads),
}));
