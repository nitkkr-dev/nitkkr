import {pgTable} from "drizzle-orm/pg-core";
import { sponsoredResearchProjects } from "./sponsored-research-projects.schema";
import { relations } from "drizzle-orm";
export const sponsoredResearchProjectsFaculties = pgTable('sponsored_research_projects_faculties', (t) => ({
  id: t.serial('id').primaryKey(),
  sponsoredResearchProjectId: t.integer('sponsored_research_project_id').references(() => sponsoredResearchProjects.id).notNull(),
  facultyName: t.varchar('faculty_name').notNull(),
}));

export const sponsoredResearchProjectsFacultiesRelations = relations(
  sponsoredResearchProjectsFaculties,
  ({ one }) => ({
    sponsoredResearchProject: one(sponsoredResearchProjects, {
      fields: [sponsoredResearchProjectsFaculties.sponsoredResearchProjectId],
      references: [sponsoredResearchProjects.id],
    }),
  })
);