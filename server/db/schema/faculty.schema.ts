import { relations } from 'drizzle-orm';
import { pgTable, uniqueIndex } from 'drizzle-orm/pg-core';

import {
  courseLogs,
  courses,
  departments,
  doctorates,
  persons,
  sectionHeads,
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
    linkedInId: t.text(),
    researchGateId: t.text(),
    scopusId: t.text(),
  }),
  (table) => [uniqueIndex('faculty_employee_id_idx').on(table.employeeId)]
);

// Qualifications Table
export const qualifications = pgTable('qualifications', (t) => ({
  id: t.integer().primaryKey(),
  facultyId: t
    .integer()
    .references(() => faculty.id)
    .notNull(),
  title: t.text().notNull(),
  about: t.text().notNull(),
  location: t.text().notNull(),
  startDate: t.date().notNull(),
  endDate: t.date(),
}));

// Experience Table
export const experience = pgTable('experience', (t) => ({
  id: t.serial().primaryKey(),
  facultyId: t
    .integer()
    .references(() => faculty.id)
    .notNull(),
  title: t.text().notNull(),
  description: t.text().notNull(),
  place: t.text().notNull(),
  startDate: t.date().notNull(),
  endDate: t.date().notNull(),
}));

// Projects Table
export const projects = pgTable('projects', (t) => ({
  id: t.serial().primaryKey(),
  facultyId: t
    .integer()
    .references(() => faculty.id)
    .notNull(),
  title: t.text().notNull(),
  field: t.text().notNull(),
  role: t.text().notNull(),
  startDate: t.date().notNull(),
  endDate: t.date().notNull(),
  tag: t
    .varchar({
      enum: ['sponsored', 'unsponsored'],
    })
    .notNull(),
}));

// Continuing Education Table
export const continuingEducation = pgTable('continuing_education', (t) => ({
  id: t.serial().primaryKey(),
  facultyId: t
    .integer()
    .references(() => faculty.id)
    .notNull(),
  title: t.text().notNull(),
  field: t.text().notNull(),
  role: t.text().notNull(),
  startDate: t.date().notNull(),
  endDate: t.date().notNull(),
}));

// Publications Table
export const publications = pgTable('publications', (t) => ({
  id: t.integer().primaryKey(),
  facultyId: t
    .integer()
    .references(() => faculty.id)
    .notNull(),
  title: t.text().notNull(),
  field: t.text().notNull(),
  people: t.text().notNull(),
  date: t.date().notNull(),
  tag: t
    .varchar({
      enum: ['book', 'journal', 'conference'],
    })
    .notNull(),
}));

// // Research Scholars Table
// export const researchScholars = pgTable('research_scholars', (t) => ({
//   id: t.integer().primaryKey(),
//   facultyId: t
//     .integer()
//     .references(() => faculty.id)
//     .notNull(),
//   title: t.text().notNull(),
//   role: t.text().notNull(),
//   person: t.text().notNull(),
//   date: t.date().notNull(),
//   tag: t.text(),
// }));

// Awards and Honors Table
export const awardsAndHonors = pgTable('awards_and_honors', (t) => ({
  id: t.integer().primaryKey(),
  facultyId: t
    .integer()
    .references(() => faculty.id)
    .notNull(),
  title: t.text().notNull(),
  field: t.text().notNull(),
  date: t.date().notNull(),
  place: t.text().notNull(),
}));

// Custom Topics Table
export const customTopics = pgTable('custom_topics', (t) => ({
  id: t.serial().primaryKey(),
  facultyId: t
    .integer()
    .references(() => faculty.id)
    .notNull(),
  name: t.text().notNull(),
}));

// Custom Information Table
export const customInformation = pgTable('custom_information', (t) => ({
  id: t.serial().primaryKey(),
  topicId: t
    .integer()
    .references(() => customTopics.id, { onDelete: 'cascade' })
    .notNull(),
  title: t.text().notNull(),
  description: t.text(),
  caption: t.text(),
  startDate: t.date(),
  endDate: t.date(),
}));

export const facultyRelations = relations(faculty, ({ many, one }) => ({
  courseLogs: many(courseLogs),
  courses: many(courses),
  department: one(departments, {
    fields: [faculty.departmentId],
    references: [departments.id],
  }),
  doctorates: many(doctorates),
  sectionHead: many(sectionHeads),
  sponsoredResearchProjects: many(sponsoredResearchProjects),
  person: one(persons, {
    fields: [faculty.id],
    references: [persons.id],
  }),
  qualifications: many(qualifications),
  experience: many(experience),
  projects: many(projects),
  continuingEducation: many(continuingEducation),
  publications: many(publications),
  //  researchScholars: many(researchScholars),
  awardsAndHonors: many(awardsAndHonors),
  customTopics: many(customTopics),
}));

export const customTopicsRelations = relations(customTopics, ({ many }) => ({
  customInformation: many(customInformation),
}));
