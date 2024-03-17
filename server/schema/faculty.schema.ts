import { relations, sql } from 'drizzle-orm';
import {
  integer,
  jsonb,
  pgTable,
  smallint,
  text,
  varchar,
} from 'drizzle-orm/pg-core';

import { departments, persons } from '.';

export const faculty = pgTable('faculty', {
  id: integer('id')
    .primaryKey()
    .references(() => persons.id),
  designation: varchar('designation').notNull(),
  officeTelephone: varchar('office_telephone', { length: 13 }).notNull(),
  homeTelephone: varchar('home_telephone', { length: 13 }),
  departmentId: smallint('department_id')
    .references(() => departments.id)
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
  researchSupervision: jsonb('research_supervision').notNull(),
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
  googleScholarId: text('google_scholar_id'),
  orchidId: text('orchid_id'),
  scopusId: text('scopus_id'),
});

export const facultyRelations = relations(faculty, ({ one }) => ({
  department: one(departments, {
    fields: [faculty.departmentId],
    references: [departments.id],
  }),
  person: one(persons, {
    fields: [faculty.id],
    references: [persons.id],
  }),
}));
