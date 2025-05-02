import { relations } from 'drizzle-orm';
import { pgTable } from 'drizzle-orm/pg-core';

import { faculty, staff } from '.';

export const hostels = pgTable('hostels', (t) => ({
  id: t.serial().primaryKey(),
  address: t.text().notNull(),
  name: t.varchar({ length: 256 }).notNull(),
  urlName: t.varchar({ length: 128 }).notNull(),
  email: t.varchar({ length: 256 }).notNull(),
  telephone: t.varchar({ length: 13 }).notNull(),
  alternateTelephone: t.varchar({ length: 13 }),
  type: t.varchar({ enum: ['boys', 'girls'] }).notNull(),
  createdAt: t.timestamp().defaultNow().notNull(),
  updatedAt: t
    .timestamp()
    .$onUpdate(() => new Date())
    .notNull(),
  overview: t.text().array().notNull(),
  staffOverview: t.text().array().notNull(),
  facilities: t.text().array().notNull(),
}));

export const hostelsRelations = relations(hostels, ({ many }) => ({
  hostelStaff: many(hostelStaff),
  hostelFaculty: many(hostelFaculty),
}));

export const hostelStaff = pgTable('hostel_staff', (t) => ({
  hostelId: t
    .serial()
    .references(() => hostels.id)
    .notNull(),
  staffId: t
    .serial()
    .references(() => staff.id)
    .notNull(),
  post: t.varchar({ enum: ['supervisor'] }).notNull(),
}));

export const hostelStaffRelations = relations(hostelStaff, ({ one }) => ({
  hostel: one(hostels, {
    fields: [hostelStaff.hostelId],
    references: [hostels.id],
  }),
  staff: one(staff, {
    fields: [hostelStaff.staffId],
    references: [staff.id],
  }),
}));

export const hostelFaculty = pgTable('hostel_faculty', (t) => ({
  hostelId: t
    .serial()
    .references(() => hostels.id)
    .notNull(),
  facultyId: t
    .serial()
    .references(() => faculty.id)
    .notNull(),
  post: t.varchar({ enum: ['warden', 'deputy_warden'] }).notNull(),
}));

export const hostelFacultyRelations = relations(hostelFaculty, ({ one }) => ({
  hostel: one(hostels, {
    fields: [hostelFaculty.hostelId],
    references: [hostels.id],
  }),
  faculty: one(faculty, {
    fields: [hostelFaculty.facultyId],
    references: [faculty.id],
  }),
}));
