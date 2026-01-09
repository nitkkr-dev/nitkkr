import { pgTable } from 'drizzle-orm/pg-core';

export const mous = pgTable('mous', (t) => ({
  id: t.serial('id').primaryKey(),
  organization: t.varchar('organization').notNull(),
  signingDate: t.date('signingDate').notNull(),
}));
