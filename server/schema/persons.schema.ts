import { sql } from 'drizzle-orm';
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

export const persons = pgTable(
  'persons',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }).notNull(),
    email: varchar('email', { length: 256 }).notNull(),
    image: text('image').notNull(),
    sex: varchar('sex', { enum: ['M', 'F', 'O'] }).notNull(),
    roleIds: smallint('role_ids')
      .array()
      .default(sql`'{}'`)
      .notNull(),
    isActive: boolean('is_active').default(true).notNull(),
    createdOn: date('created_on').defaultNow().notNull(),
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
