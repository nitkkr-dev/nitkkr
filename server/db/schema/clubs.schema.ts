import { relations } from 'drizzle-orm';
import {
  boolean,
  date,
  integer,
  pgTable,
  smallint,
  smallserial,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

import {
  clubMembers,
  clubSocials,
  departments,
  events,
  faculty,
  notifications,
  persons,
} from '.';

export const clubs = pgTable('clubs', {
  id: smallserial('id').primaryKey(),
  name: varchar('name', { length: 128 }).notNull(),
  urlName: varchar('url_name', { length: 128 }).notNull(),
  alias: varchar('alias', { length: 16 }),
  tagline: varchar('tagline', { length: 256 }).notNull(),
  email: varchar('email', { length: 256 }).notNull(),
  aboutUs: varchar('about_us').notNull(),
  // howToJoinUs: varchar('how_to_join_us').notNull(),
  // whyToJoinUs: varchar('why_to_join_us').notNull(),
  category: varchar('category', {
    enum: ['committee', 'cultural', 'crew', 'technical'],
  }).notNull(),
  departmentId: smallint('department_id').references(() => departments.id),
  facultyInchargeId1: integer('faculty_incharge_id1')
    .references(() => faculty.id)
    .notNull(),
  facultyInchargeId2: integer('faculty_incharge_id2').references(
    () => faculty.id
  ),
  // facultyInchargeId3: integer('faculty_incharge_id3').references(
  //   () => faculty.id
  // ),
  isActive: boolean('is_active').default(true).notNull(),
  createdOn: date('created_on', { mode: 'date' }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .$onUpdate(() => new Date())
    .notNull(),
  updatedBy: integer('updated_by')
    .references(() => persons.id)
    .notNull(),
});

export const clubsRelations = relations(clubs, ({ many, one }) => ({
  clubEvents: many(events),
  clubMembers: many(clubMembers),
  clubSocials: many(clubSocials),
  department: one(departments, {
    fields: [clubs.departmentId],
    references: [departments.id],
  }),
  facultyIncharge1: one(faculty, {
    relationName: 'facultyIncharge1',
    fields: [clubs.facultyInchargeId1],
    references: [faculty.id],
  }),
  facultyIncharge2: one(faculty, {
    relationName: 'facultyIncharge2',
    fields: [clubs.facultyInchargeId2],
    references: [faculty.id],
  }),
  // facultyIncharge3: one(faculty, {
  //   relationName: 'facultyIncharge3',
  //   fields: [clubs.facultyInchargeId3],
  //   references: [faculty.id],
  // }),
  // clubNotifications: many(notifications),
}));
