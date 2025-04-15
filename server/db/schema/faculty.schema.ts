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
  researchProjects,
  sections,
} from '.';

export const faculty = pgTable(
  'faculty',
  {
    id: integer('id')
      .primaryKey()
      .references(() => persons.id),
    employeeId: varchar('employee_id', { length: 8 }).unique().notNull(),
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
  id: serial('id').primaryKey(),
  facultyId: varchar('faculty_id', { length: 8 })
    .references(() => faculty.employeeId)
    .notNull(),
  title: text('title').notNull(),
  field: text('field').notNull(),
  location: text('location').notNull(),
  startDate: date('start_date').notNull(),
  endDate: date('end_date'),
});

// Experience Table
export const experience = pgTable('experience', {
  id: serial('id').primaryKey(),
  facultyId: varchar('faculty_id', { length: 8 })
    .references(() => faculty.employeeId)
    .notNull(),
  title: text('title').notNull(),
  field: text('field').notNull(),
  location: text('location').notNull(),
  startDate: date('start_date').notNull(),
  endDate: date('end_date'),
});

// Continuing Education Table
export const continuingEducation = pgTable('continuing_education', {
  id: serial('id').primaryKey(),
  facultyId: varchar('faculty_id', { length: 8 })
    .references(() => faculty.employeeId)
    .notNull(),
  title: text('title').notNull(),
  type: text('type').notNull(),
  role: text('role').notNull(),
  startDate: date('start_date').notNull(),
  endDate: date('end_date').notNull(),
});

// Publications Table
export const publications = pgTable('publications', {
  id: serial('id').primaryKey(),
  facultyId: varchar('faculty_id', { length: 8 })
    .references(() => faculty.employeeId)
    .notNull(),
  title: text('title').notNull(),
  details: text('details').notNull(),
  people: text('people').notNull(),
  date: date('date').notNull(),
  tag: varchar('tag', {
    enum: ['book', 'journal', 'conference'],
  }).notNull(),
});

// Awards and Honors Table
export const awardsAndHonors = pgTable('awards_and_honors', {
  id: serial('id').primaryKey(),
  facultyId: varchar('faculty_id', { length: 8 })
    .references(() => faculty.employeeId)
    .notNull(),
  title: text('title').notNull(),
  field: text('field').notNull(),
  date: date('date').notNull(),
  location: text('location').notNull(),
});

// Custom Topics Table
export const customTopics = pgTable('custom_topics', {
  id: serial('id').primaryKey(),
  facultyId: varchar('faculty_id', { length: 8 })
    .references(() => faculty.employeeId)
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
