import { pgTable, serial, uniqueIndex, varchar } from 'drizzle-orm/pg-core';

export const persons = pgTable(
  'persons',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }).notNull(),
    email: varchar('email', { length: 256 }).notNull(),
  },
  (persons) => {
    return {
      personsEmailIndex: uniqueIndex('persons_email_idx').on(persons.email),
    };
  }
);
