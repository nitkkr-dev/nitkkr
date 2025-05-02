// import { relations, sql } from 'drizzle-orm';
// correct all these commented codes after the review
import {
  // char,
  // integer,
  pgTable,
  // smallint,
  // smallserial,
  // text,
  varchar,
  serial,
  jsonb
} from 'drizzle-orm/pg-core';

// import { courseLogs, coursesToMajors, departments, faculty } from '.';

// Define the Courses table with embedded coursesToMajors array
export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  code: varchar("code", { length: 255 }).notNull().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  coursesToMajors: jsonb("courses_to_majors")
    .notNull()
    .$type<{ 
      courseId: number; 
      majorId: number; 
      semester: number; 
      lectureCredits: number; 
      tutorialCredits: number; 
      practicalCredits: number; 
      major: { id: number; name: string }; 
    }[]>(), // Storing as an array of JSON
});

// Will use this old schema and relations after review

// export const courses = pgTable('courses', {
//   id: smallserial('id').primaryKey(),
//   code: varchar('code', { length: 7 }).unique().notNull(),
//   title: varchar('title', { length: 128 }).notNull(),
//   coordinatorId: integer('coordinator_id')
//     .references(() => faculty.id)
//     .notNull(),
//   departmentId: smallint('department_id')
//     .references(() => departments.id)
//     .notNull(),
//   prerequisites: varchar('prerequisites', { length: 7 })
//     .array()
//     .default(sql`'{}'`)
//     .notNull(),
//   nature: char('nature', { length: 3 }).notNull(),
//   objectives: text('objectives')
//     .array()
//     .default(sql`'{}'`)
//     .notNull(),
//   content: text('content').notNull(),
//   outcomes: text('outcomes')
//     .array()
//     .default(sql`'{}'`)
//     .notNull(),
//   essentialReading: text('essential_reading')
//     .array()
//     .default(sql`'{}'`)
//     .notNull(),
//   supplementaryReading: text('supplementary_reading')
//     .array()
//     .default(sql`'{}'`)
//     .notNull(),
//   similarCourses: varchar('similar_courses', { length: 7 })
//     .array()
//     .default(sql`'{}'`)
//     .notNull(),
// });

// export const coursesRelations = relations(courses, ({ many, one }) => ({
//   coordinator: one(faculty, {
//     fields: [courses.coordinatorId],
//     references: [faculty.id],
//   }),
//   courseLogs: many(courseLogs),
//   coursesToMajors: many(coursesToMajors),
//   department: one(departments, {
//     fields: [courses.departmentId],
//     references: [departments.id],
//   }),
// }));
