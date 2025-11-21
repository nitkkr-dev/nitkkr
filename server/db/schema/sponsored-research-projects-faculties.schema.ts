import {pgTable} from "drizzle-orm/pg-core";
export const sponsoredResearchProjectsFaculties = pgTable('sponsored_research_projects_faculties', (t) => ({
  id: t.serial('id').primaryKey(),
  sponsoredResearchProjectId: t.integer('sponsored_research_project_id').notNull(),
  facultyName: t.varchar('faculty_name').notNull(),
}));