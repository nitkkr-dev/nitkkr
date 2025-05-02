import { relations } from 'drizzle-orm';
import { pgTable, uniqueIndex } from 'drizzle-orm/pg-core';

import { roles } from '.';

export const persons = pgTable(
  'persons',
  (t) => ({
    id: t.serial().primaryKey(),
    name: t.varchar({ length: 256 }).notNull(),
    email: t.varchar({ length: 256 }).notNull(),
    countryCode: t.varchar({ length: 3 }),
    telephone: t.varchar({ length: 13 }).notNull(),
    alternateCountryCode: t.varchar({ length: 3 }),
    alternateTelephone: t.varchar({ length: 13 }),

    sex: t.varchar({ enum: ['M', 'F', 'O'] }).notNull(),
    dateOfBirth: t.date({ mode: 'date' }),
    roleId: t.smallint().references(() => roles.id),
    type: t.varchar({ enum: ['faculty', 'staff', 'student'] }).notNull(),
    isActive: t.boolean().default(true).notNull(),
    createdOn: t.date({ mode: 'date' }).defaultNow().notNull(),
    updatedAt: t
      .timestamp()
      .$onUpdate(() => new Date())
      .notNull(),
  }),
  (table) => [uniqueIndex('persons_email_idx').on(table.email)]
);

export const personsRelations = relations(persons, ({ one }) => ({
  role: one(roles, {
    fields: [persons.roleId],
    references: [roles.id],
  }),
}));
