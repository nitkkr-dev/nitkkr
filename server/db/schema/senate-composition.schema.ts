import { pgTable } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const senateComposition = pgTable('senate_composition', (t) => ({
  id: t.serial('id').primaryKey(),
  name: t
    .text()
    .array()
    .notNull()
    .default(sql`'{}'::text[]`),
  servedAs: t.varchar('served_as', { length: 256 }).notNull(),
  createdAt: t.timestamp('created_at').defaultNow().notNull(),
  updatedAt: t
    .timestamp('updated_at')
    .$onUpdate(() => new Date())
    .notNull(),
}));
