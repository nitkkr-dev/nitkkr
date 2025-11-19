import { pgTable } from 'drizzle-orm/pg-core';

export const mous = pgTable('mous', (t) => ({
  srNo: t.serial().primaryKey(),
  organization: t.varchar({ length: 255 }).notNull(),
  signingDate: t.date().notNull(),
}));
