import { relations } from 'drizzle-orm';
import {
  boolean,
  date,
  pgTable,
  serial,
  smallint,
  timestamp,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/pg-core';

import { formsModifiableByPersons, formsVisibleToPersons, roles } from '.';

export const persons = pgTable(
  'persons',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }).notNull(),
    email: varchar('email', { length: 256 }).notNull(),
    telephone: varchar('telephone', { length: 13 }).notNull(),
    alternateTelephone: varchar('alternate_telephone', { length: 13 }),

    sex: varchar('sex', { enum: ['M', 'F', 'O'] }).notNull(),
    dateOfBirth: date('date_of_birth', { mode: 'date' }),
    roleId: smallint('role_id').references(() => roles.id),
    type: varchar('type', { enum: ['faculty', 'staff', 'student'] }).notNull(),
    isActive: boolean('is_active').default(true).notNull(),
    createdOn: date('created_on', { mode: 'date' }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at')
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (persons) => {
    return {
      personsEmailIndex: uniqueIndex('persons_email_idx').on(persons.email),
    };
  }
);

export const personsRelations = relations(persons, ({ one, many }) => ({
  role: one(roles, {
    fields: [persons.roleId],
    references: [roles.id],
  }),
  modifiableForms: many(formsModifiableByPersons),
  fillableForms: many(formsVisibleToPersons),
}));
