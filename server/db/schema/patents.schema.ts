import { pgTable } from 'drizzle-orm/pg-core';

/*
SAMPLE DATA

{
    "S. No.": "1",
    "Application No.": "2269/DEL/2012",
    "Patent Number": "320045",
    "Technology / Invention title": "Intelligent induction hardening device and method thereof",
    "Inventor(s) name": "1. Amit Kohli, DAV Jalandhar                                2. Hari Singh, NIT Kurukshetra                                       3. Kuldeep Singh Nagla, NIT Jalandhar",
    "Filing date": "20/07/2012",
    "Publish date": "7-2-2014",
    "Grant date": "6-9-2019"
  }

*/

export const patents = pgTable('patents', (t) => ({
  sNo: t.integer().primaryKey(),
  applicationNumber: t.varchar({ length: 50 }).notNull(),
  patentNumber: t.varchar({ length: 50 }).notNull(),
  title: t.varchar({ length: 255 }).notNull(), // "Technology / Invention title"
  inventors: t.text().notNull(), // "Inventor(s) name"
  filingDate: t.varchar({ length: 20 }).notNull(), // "Filing date"
  publishDate: t.varchar({ length: 20 }).notNull(), // "Publish date"
  grantDate: t.varchar({ length: 20 }).notNull(), // "Grant date"
}));
