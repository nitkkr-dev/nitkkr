import { sql } from 'drizzle-orm';
import { pgEnum, pgTable } from 'drizzle-orm/pg-core';

export const permissionsEnum = pgEnum('permissions', ['ADMIN']);

export const roles = pgTable('roles', (t) => ({
  id: t.smallserial().primaryKey(),
  name: t.varchar({ length: 100 }).notNull(),
  permissions: permissionsEnum()
    .array()
    .default(sql`'{}'`)
    .notNull(),
}));
