import { sql } from 'drizzle-orm';
import { pgEnum, pgTable, smallserial, varchar } from 'drizzle-orm/pg-core';

export const permissionsEnum = pgEnum('permissions', ['ADMIN']);

export const roles = pgTable('roles', {
  id: smallserial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  permissions: permissionsEnum('permissions')
    .array()
    .default(sql`'{}'`)
    .notNull(),
});
