import { relations } from 'drizzle-orm';
import { pgTable, uniqueIndex } from 'drizzle-orm/pg-core';

import {
  courseLogs,
  courses,
  departments,
  doctorates,
  persons,
  researchProjects,
  sectionHeads,
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
  id: t.serial().primaryKey(),
  facultyId: t
    .varchar()
    .references(() => faculty.employeeId)
    .notNull(),
  degree: t.text().notNull(),
  specialization: t.text().notNull(),
  universityName: t.text().notNull(),
  startDate: t.date(),
  endDate: t.date(),
}));

// Experience Table
export const experience = pgTable('experience', (t) => ({
  id: t.serial().primaryKey(),
  facultyId: t
    .varchar()
    .references(() => faculty.employeeId)
    .notNull(),
  designation: t.text().notNull(),
  specialization: t.text().notNull(),
  organizationName: t.text().notNull(),
  startDate: t.date().notNull(),
  endDate: t.date().notNull(),
}));

// Continuing Education Table
export const continuingEducation = pgTable('continuing_education', (t) => ({
  id: t.serial().primaryKey(),
  facultyId: t
    .varchar()
    .references(() => faculty.employeeId)
    .notNull(),
  title: t.text().notNull(),
  type: t.text().notNull(),
  role: t.text().notNull(),
  startDate: t.date().notNull(),
  endDate: t.date().notNull(),
}));

// Publications Table
export const publications = pgTable('publications', (t) => ({
  id: t.serial().primaryKey(),
  facultyId: t
    .varchar()
    .references(() => faculty.employeeId)
    .notNull(),
  // title: t.text().notNull(),
  details: t.text().notNull(),
  // people: t.text().notNull(),
  // date: t.date().notNull(),
  tag: t
    .varchar({
      enum: ['book', 'journal', 'conference', 'book chapter'],
    })
    .notNull(),
}));

// // Research Scholars Table
// export const researchScholars = pgTable('research_scholars', (t) => ({
//   id: t.serial().primaryKey(),
//  facultyId: t
//    .varchar()
//    .references(() => faculty.employeeId)
//    .notNull(),
//   title: t.text().notNull(),
//   role: t.text().notNull(),
//   person: t.text().notNull(),
//   date: t.date().notNull(),
//   tag: t.text(),
// }));

// Awards and Honors Table
export const awardsAndHonors = pgTable('awards_and_honors', (t) => ({
  id: t.serial().primaryKey(),
  facultyId: t
    .varchar()
    .references(() => faculty.employeeId)
    .notNull(),
  title: t.text().notNull(),
  awardingAgency: t.text().notNull(),
  date: t.date().notNull(),
  location: t.text().notNull(),
}));

// Custom Topics Table
export const customTopics = pgTable('custom_topics', (t) => ({
  id: t.serial().primaryKey(),
  facultyId: t
    .varchar()
    .references(() => faculty.employeeId)
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
  researchProjects: many(researchProjects),
  person: one(persons, {
    fields: [faculty.id],
    references: [persons.id],
  }),
  qualifications: many(qualifications),
  experience: many(experience),
  continuingEducation: many(continuingEducation),
  publications: many(publications),
  awardsAndHonors: many(awardsAndHonors),
  customTopics: many(customTopics),
}));

export const qualificationsRelations = relations(qualifications, ({ one }) => ({
  faculty: one(faculty, {
    fields: [qualifications.facultyId],
    references: [faculty.employeeId],
  }),
}));

export const experienceRelations = relations(experience, ({ one }) => ({
  faculty: one(faculty, {
    fields: [experience.facultyId],
    references: [faculty.employeeId],
  }),
}));

export const continuingEducationRelations = relations(
  continuingEducation,
  ({ one }) => ({
    faculty: one(faculty, {
      fields: [continuingEducation.facultyId],
      references: [faculty.employeeId],
    }),
  })
);

export const publicationsRelations = relations(publications, ({ one }) => ({
  faculty: one(faculty, {
    fields: [publications.facultyId],
    references: [faculty.employeeId],
  }),
}));

export const awardsAndHonorsRelations = relations(
  awardsAndHonors,
  ({ one }) => ({
    faculty: one(faculty, {
      fields: [awardsAndHonors.facultyId],
      references: [faculty.employeeId],
    }),
  })
);

export const customTopicsRelations = relations(
  customTopics,
  ({ one, many }) => ({
    faculty: one(faculty, {
      fields: [customTopics.facultyId],
      references: [faculty.employeeId],
    }),
    customInformation: many(customInformation),
  })
);

export const customInformationRelations = relations(
  customInformation,
  ({ one }) => ({
    customTopic: one(customTopics, {
      fields: [customInformation.topicId],
      references: [customTopics.id],
    }),
  })
);
