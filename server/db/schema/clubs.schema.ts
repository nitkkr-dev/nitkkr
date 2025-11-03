import { relations } from 'drizzle-orm';
import { pgTable } from 'drizzle-orm/pg-core';

import { clubMembers } from './club-members.schema';
import { clubSocials } from './club-socials.schema';
import { departments } from './departments.schema';
import { events } from './events.schema';
import { notifications } from './notifications.schema';
import { persons } from './persons.schema';
import { clubFacultyHeads } from './club-faculty-heads.schema';

export const clubs = pgTable('clubs', (t) => ({
  id: t.smallserial('id').primaryKey(),
  name: t.varchar('name', { length: 128 }).notNull(),
  urlName: t.varchar('url_name', { length: 128 }).notNull(),
  alias: t.varchar('alias', { length: 16 }),
  tagline: t.varchar('tagline', { length: 256 }).notNull(),
  email: t.varchar('email', { length: 256 }).notNull(),
  aboutUs: t.varchar('about_us').notNull(),
  howToJoinUs: t.varchar('how_to_join_us').notNull(),
  whyToJoinUs: t.varchar('why_to_join_us').notNull(),
  category: t
    .varchar('category', {
      enum: ['committee', 'cultural', 'crew', 'technical'],
    })
    .notNull(),
  departmentId: t.smallint('department_id').references(() => departments.id),
  isActive: t.boolean('is_active').default(true).notNull(),
  createdOn: t.date('created_on', { mode: 'date' }).defaultNow().notNull(),
  updatedAt: t
    .timestamp('updated_at')
    .$onUpdate(() => new Date())
    .notNull(),
  updatedBy: t
    .integer('updated_by')
    .references(() => persons.id)
    .notNull(),
}));

export const clubsRelations = relations(clubs, ({ many, one }) => ({
  clubEvents: many(events),
  clubMembers: many(clubMembers),
  clubSocials: many(clubSocials),
  department: one(departments, {
    fields: [clubs.departmentId],
    references: [departments.id],
  }),
  clubNotifications: many(notifications),
  clubFacultyHeads: many(clubFacultyHeads),
}));
