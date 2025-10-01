import { pgTable } from 'drizzle-orm/pg-core';

/*
SAMPLE DATA
{
    "S. No.": "1",
    "Grant year": "2019",
    "Copyright No.": "SW-12631/2019",
    "Title": "Software for Extracting Reusable Software Components from Object Oriented Source Code Using Search Based PSO Approach",
    "Creater": "Jitender Kumar Chabra"
  },

*/
export const copyrights = pgTable('copyrights', (t) => ({
  sNo: t.integer().primaryKey(),
  grantYear: t.varchar({ length: 4 }).notNull(),
  copyrightNo: t.varchar({ length: 255 }).notNull(),
  title: t.varchar({ length: 255 }).notNull(),
  creator: t.varchar({ length: 255 }).notNull(),
}));
