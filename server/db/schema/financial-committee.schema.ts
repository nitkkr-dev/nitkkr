import { pgTable } from 'drizzle-orm/pg-core';

export const financialCommittee = pgTable('financial_committee', (t) => ({
  id: t.serial('id').primaryKey(),
  name: t.text('name').notNull(),
  servedAs: t.varchar('served_as', { length: 64 }).notNull(),
}));
