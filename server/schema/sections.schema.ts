import { relations, sql } from 'drizzle-orm';
import {
  integer,
  pgTable,
  smallserial,
  text,
  varchar,
} from 'drizzle-orm/pg-core';

import { faculty, staff } from '.';

export const sections = pgTable('sections', {
  id: smallserial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  urlName: varchar('url_name', { length: 100 }).notNull(),
  email: varchar('email', { length: 256 }).notNull(),
  banner: varchar('banner').notNull(),
  aboutUs: varchar('about_us').notNull(),
  headFacultyId: integer('head_faculty_id')
    .references(() => faculty.id)
    .notNull(),
  images: text('images')
    .array()
    .default(sql`'{}'`)
    .notNull(),
});

export const sectionsRelations = relations(sections, ({ many, one }) => ({
  headFaculty: one(faculty, {
    fields: [sections.headFacultyId],
    references: [faculty.id],
  }),
  staff: many(staff),
}));
