import { relations } from 'drizzle-orm';
import { pgTable, smallserial, varchar } from 'drizzle-orm/pg-core';

import { sectionHeads, staff } from '.';

export const sections = pgTable('sections', {
  id: smallserial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  urlName: varchar('url_name', { length: 100 }).notNull(),
  email: varchar('email', { length: 256 }).notNull(),
  aboutUs: varchar('about_us').notNull(),
});

export const sectionsRelations = relations(sections, ({ many }) => ({
  headFaculties: many(sectionHeads),
  staff: many(staff),
}));
