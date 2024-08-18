import { relations } from 'drizzle-orm';
import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

import { faculty, staff } from '.';

export const hostels = pgTable('hostels', {
  id: serial('id').primaryKey(),
  address: text('address').notNull(),
  name: varchar('name', { length: 256 }).notNull(),
  urlName: varchar('url_name', { length: 128 }).notNull(),
  email: varchar('email', { length: 256 }).notNull(),
  telephone: varchar('telephone', { length: 13 }).notNull(),
  alternateTelephone: varchar('alternate_telephone', { length: 13 }),
  type: varchar('type', {
    enum: ['boys', 'girls'],
  }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .$onUpdate(() => new Date())
    .notNull(),
  overview: text('overview').array().notNull(),
  staffOverview: text('staff_overview').array().notNull(),
  facilities: text('facilities').array().notNull(),
});

export const hostelsRelations = relations(hostels, ({ many }) => ({
  hostelStaff: many(hostelStaff),
  wardens: many(faculty, { relationName: 'wardens' }),
  deputyWardens: many(faculty, { relationName: 'deputy_wardens' }),
}));

export const hostelStaff = pgTable('hostel_staff', {
  hostelId: serial('hostel_id')
    .references(() => hostels.id)
    .notNull(),
  staffId: serial('staff_id')
    .references(() => staff.id)
    .notNull(),
  post: varchar('post', { enum: ['supervisor'] }).notNull(),
});

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