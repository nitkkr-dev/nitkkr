import { relations } from 'drizzle-orm';
import {
  date,
  integer,
  pgTable,
  serial,
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

export const faculty = pgTable(
  'faculty',
  {
    id: integer('id')
      .primaryKey()
      .references(() => persons.id),
    employeeId: varchar('employee_id', { length: 8 }).notNull(),
    officeAddress: varchar('college_address', { length: 16 }).notNull(),
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
    googleScholarId: text('google_scholar_id'),
    linkedInId: text('linked_in_id'),
    researchGateId: text('research_gate_id'),
    scopusId: text('scopus_id'),
  },
  (faculty) => {
    return {
      facultyEmployeeIdIndex: uniqueIndex('faculty_employee_id_idx').on(
        faculty.employeeId
      ),
    };
  }
);

// Qualifications Table
export const qualifications = pgTable('qualifications', {
  id: integer('id').primaryKey(),
  facultyId: integer('faculty_id')
    .references(() => faculty.id)
    .notNull(),
  title: text('title').notNull(),
  about: text('about').notNull(),
  location: text('location').notNull(),
  startDate: date('start_date').notNull(),
  endDate: date('end_date'),
});

// Experience Table
export const experience = pgTable('experience', {
  id: serial('id').primaryKey(),
  facultyId: integer('faculty_id')
    .references(() => faculty.id)
    .notNull(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  place: text('place').notNull(),
  startDate: date('start_date').notNull(),
  endDate: date('end_date').notNull(),
});

// Projects Table
export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  facultyId: integer('faculty_id')
    .references(() => faculty.id)
    .notNull(),
  title: text('title').notNull(),
  field: text('field').notNull(),
  role: text('role').notNull(),
  startDate: date('start_date').notNull(),
  endDate: date('end_date').notNull(),
  tag: varchar('tag', {
    enum: ['sponsored', 'unsponsored'],
  }).notNull(),
});

// Continuing Education Table
export const continuingEducation = pgTable('continuing_education', {
  id: serial('id').primaryKey(),
  facultyId: integer('faculty_id')
    .references(() => faculty.id)
    .notNull(),
  title: text('title').notNull(),
  field: text('field').notNull(),
  role: text('role').notNull(),
  startDate: date('start_date').notNull(),
  endDate: date('end_date').notNull(),
});

// Publications Table
export const publications = pgTable('publications', {
  id: integer('id').primaryKey(),
  facultyId: integer('faculty_id')
    .references(() => faculty.id)
    .notNull(),
  title: text('title').notNull(),
  field: text('field').notNull(),
  people: text('people').notNull(),
  date: date('date').notNull(),
  tag: varchar('tag', {
    enum: ['book', 'journal', 'conference'],
  }).notNull(),
});

// // Research Scholars Table
// export const researchScholars = pgTable('research_scholars', {
//   id: integer('id').primaryKey(),
//   facultyId: integer('faculty_id')
//     .references(() => faculty.id)
//     .notNull(),
//   title: text('title').notNull(),
//   role: text('role').notNull(),
//   person: text('person').notNull(),
//   date: date('date').notNull(),
//   tag: text('tag'),
// });

// Awards and Honors Table
export const awardsAndHonors = pgTable('awards_and_honors', {
  id: integer('id').primaryKey(),
  facultyId: integer('faculty_id')
    .references(() => faculty.id)
    .notNull(),
  title: text('title').notNull(),
  field: text('field').notNull(),
  date: date('date').notNull(),
  place: text('place').notNull(),
});

// Custom Topics Table
export const customTopics = pgTable('custom_topics', {
  id: serial('id').primaryKey(),
  facultyId: integer('faculty_id')
    .references(() => faculty.id)
    .notNull(),
  name: text('name').notNull(),
});

// Custom Information Table
export const customInformation = pgTable('custom_information', {
  id: serial('id').primaryKey(),
  topicId: integer('topic_id')
    .references(() => customTopics.id, { onDelete: 'cascade' })
    .notNull(),
  title: text('title').notNull(),
  description: text('description'),
  caption: text('caption'),
  startDate: date('start_date'),
  endDate: date('end_date'),
});

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
