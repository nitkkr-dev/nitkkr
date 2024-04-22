import { relations, sql } from 'drizzle-orm';
import {
  boolean,
  date,
  pgTable,
  serial,
  smallint,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/pg-core';

import { roles } from '.';

export const persons = pgTable(
  'persons',
  {
    id: serial('id').primaryKey(),
    type: varchar('type', { enum: ['faculty', 'staff', 'student'] }).notNull(),
    name: varchar('name', { length: 256 }).notNull(),
    email: varchar('email', { length: 256 }).notNull(),
    image: text('image').notNull(),
    sex: varchar('sex', { enum: ['M', 'F', 'O'] }).notNull(),
    dateOfBirth: date('date_of_birth', { mode: 'date' }),
    roleId: smallint('role_id')
      .references(() => roles.id)
      .notNull(),
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

export const personRelations = relations(persons, ({ one }) => ({
  role: one(roles, {
    fields: [persons.roleId],
    references: [roles.id],
  }),
}));
