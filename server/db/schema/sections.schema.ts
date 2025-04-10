import { relations } from 'drizzle-orm';
import { pgTable } from 'drizzle-orm/pg-core';

import { sectionHeads, staff } from '.';

export const sections = pgTable('sections', (t) => ({
  id: t.smallserial().primaryKey(),
  name: t.varchar({ length: 100 }).notNull(),
  urlName: t.varchar({ length: 100 }).notNull(),
  email: t.varchar({ length: 256 }).notNull(),
  aboutUs: t.varchar().notNull(),
}));

export const sectionsRelations = relations(sections, ({ many }) => ({
  headFaculties: many(sectionHeads),
  staff: many(staff),
}));
