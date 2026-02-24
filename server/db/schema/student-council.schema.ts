import { pgTable } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

import { persons } from './persons.schema';

export const studentCouncil = pgTable('student_council', (t) => ({
  id: t.serial('id').primaryKey(),

  // Foreign key → persons.id
  personId: t
    .integer('person_id')
    .notNull()
    // .unique() -> Multiple student council members can be from the same person (e.g., if they serve multiple terms), so we can't enforce uniqueness here
    .references(() => persons.id),

  section: t.varchar('section', { length: 32 }),
  category: t.varchar('category', { length: 32 }).notNull(),
  createdAt: t.timestamp('created_at').defaultNow().notNull(),

  updatedAt: t
    .timestamp('updated_at')
    .$onUpdate(() => new Date())
    .defaultNow()
    .notNull(),
}));
export const studentCouncilRelations = relations(studentCouncil, ({ one }) => ({
  person: one(persons, {
    fields: [studentCouncil.personId],
    references: [persons.id],
  }),
}));
