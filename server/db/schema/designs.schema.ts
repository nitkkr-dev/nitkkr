import { pgTable } from 'drizzle-orm/pg-core';

/*
SAMPLE DATA
{
    "S. No.": "1",
    "Date of Registration": "03-07-2013",
    "Design Number": "254948",
    "Title": "Heat Treatment Tray for Hardening of Steel",
    "Creater": "Hari Singh",
    "Class": "15-09"
  }
*/

export const designs = pgTable('designs', (t) => ({
  sNo: t.integer().primaryKey(),
  dateOfRegistration: t.date().notNull(),
  designNumber: t.varchar({ length: 255 }).notNull(),
  title: t.varchar({ length: 255 }).notNull(),
  creator: t.varchar({ length: 255 }).notNull(),
  class: t.varchar({ length: 5 }).notNull(),
}));