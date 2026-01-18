import { pgEnum, pgTable, primaryKey, uniqueIndex } from 'drizzle-orm/pg-core';
import { relations, sql } from 'drizzle-orm';

import { clubs } from './clubs.schema';
import { departments } from './departments.schema';
import { hostels } from './hostels.schema';

export const notificationCategoryEnum = pgEnum('notification_category', [
  'academic',
  'tender',
  'workshop',
  'administration',
  'recruitment',
  'admission',
  'student-activities',
  'faculty',
  'research',
  'alumni',
  'examination',
  'result',
  'hostel',
  'miscellaneous',
  'archived',
  'placements',
]);

export const notifications = pgTable(
  'notifications',
  (t) => ({
    id: t.serial('id').primaryKey(),
    title: t.varchar('title', { length: 256 }).unique().notNull(),
    content: t.text('content'),

    categories: notificationCategoryEnum('categories')
      .array()
      .notNull()
      .default(sql`'{}'::notification_category[]`),

    educationType: t.varchar('education_type', {
      enum: ['ug', 'pg', 'phd'],
    }),
    documents: t
      .text('documents')
      .array()
      .notNull()
      .default(sql`'{}'::text[]`),
    createdAt: t.timestamp('created_at').defaultNow().notNull(),
    updatedAt: t
      .timestamp('updated_at')
      .$onUpdate(() => new Date())
      .notNull(),
    // NOTE: clubId, departmentId, hostelId removed - now using junction tables
  }),
  (n) => ({
    notificationsTitleIndex: uniqueIndex('notifications_title_idx').on(n.title),
    // NOTE: Check constraints removed - enforced at application level since
    // we now use junction tables for clubs, departments, and hostels
  })
);

// ===================== JUNCTION TABLES =====================

// Junction table: notifications <-> departments (many-to-many)
export const notificationDepartments = pgTable(
  'notification_departments',
  (t) => ({
    notificationId: t
      .integer('notification_id')
      .notNull()
      .references(() => notifications.id, { onDelete: 'cascade' }),
    departmentId: t
      .integer('department_id')
      .notNull()
      .references(() => departments.id, { onDelete: 'cascade' }),
  }),
  (table) => ({
    pk: primaryKey({ columns: [table.notificationId, table.departmentId] }),
  })
);

// Junction table: notifications <-> clubs (many-to-many)
export const notificationClubs = pgTable(
  'notification_clubs',
  (t) => ({
    notificationId: t
      .integer('notification_id')
      .notNull()
      .references(() => notifications.id, { onDelete: 'cascade' }),
    clubId: t
      .integer('club_id')
      .notNull()
      .references(() => clubs.id, { onDelete: 'cascade' }),
  }),
  (table) => ({
    pk: primaryKey({ columns: [table.notificationId, table.clubId] }),
  })
);

// Junction table: notifications <-> hostels (many-to-many)
export const notificationHostels = pgTable(
  'notification_hostels',
  (t) => ({
    notificationId: t
      .integer('notification_id')
      .notNull()
      .references(() => notifications.id, { onDelete: 'cascade' }),
    hostelId: t
      .integer('hostel_id')
      .notNull()
      .references(() => hostels.id, { onDelete: 'cascade' }),
  }),
  (table) => ({
    pk: primaryKey({ columns: [table.notificationId, table.hostelId] }),
  })
);

// ===================== RELATIONS =====================

// Junction table relations
export const notificationDepartmentsRelations = relations(
  notificationDepartments,
  ({ one }) => ({
    notification: one(notifications, {
      fields: [notificationDepartments.notificationId],
      references: [notifications.id],
    }),
    department: one(departments, {
      fields: [notificationDepartments.departmentId],
      references: [departments.id],
    }),
  })
);

export const notificationClubsRelations = relations(
  notificationClubs,
  ({ one }) => ({
    notification: one(notifications, {
      fields: [notificationClubs.notificationId],
      references: [notifications.id],
    }),
    club: one(clubs, {
      fields: [notificationClubs.clubId],
      references: [clubs.id],
    }),
  })
);

export const notificationHostelsRelations = relations(
  notificationHostels,
  ({ one }) => ({
    notification: one(notifications, {
      fields: [notificationHostels.notificationId],
      references: [notifications.id],
    }),
    hostel: one(hostels, {
      fields: [notificationHostels.hostelId],
      references: [hostels.id],
    }),
  })
);

// Main notifications relations
export const notificationsRelations = relations(notifications, ({ many }) => ({
  notificationDepartments: many(notificationDepartments),
  notificationClubs: many(notificationClubs),
  notificationHostels: many(notificationHostels),
}));
