import { pgTable } from "drizzle-orm/pg-core";
import { departments } from "./departments.schema";
import { sql } from "drizzle-orm";

export const sponsoredResearchProjects = pgTable('sponsored_research_projects', (t)=>({
    id: t.serial('id').primaryKey(),
    year: t.varchar('year').notNull(),
    departmentId: t.smallserial('department_id').references(() => departments.id).notNull(),
    titleOfProject: t.varchar('title_of_project').notNull(),
    agency: t.varchar('agency').notNull(),
    amountInLakh: t.numeric('amount_in_lakh', { precision: 10, scale: 2 }).notNull(),
    sanctionedFileOrderNO: t.varchar('sanctioned_file_order_no'),
    sanctionedDate: t.date('sanctioned_date'),
    status: t.varchar('status', { enum: ['ongoing', 'completed'] }).default('ongoing').notNull(),
}),
(t) => ({
    validYearFormat: sql`CHECK (${t.year} ~ '^[0-9]{4}-[0-9]{2}$')`,
})
);