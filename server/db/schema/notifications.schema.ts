import { check, pgEnum, pgTable, uniqueIndex } from 'drizzle-orm/pg-core';
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

    // NEW - array of categories
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
    clubId: t.integer('club_id').references(() => clubs.id),
    departmentId: t.integer('department_id').references(() => departments.id),
    hostelId: t.integer('hostel_id').references(() => hostels.id),
  }),
  (n) => ({
    notificationsTitleIndex: uniqueIndex('notifications_title_idx').on(n.title),
    clubRequiredForStudent: check(
      'club_required_for_student',
      sql`(
        ('student-activities' = ANY(${n.categories}))
        OR
        (NOT ('student-activities' = ANY(${n.categories})) AND ${n.clubId} IS NULL)
      )`
    ),
    educationTypeRequiredForAcademicAdmission: check(
      'education_type_required_for_academic_admission',
      sql`(
        ('academic' = ANY(${n.categories}) OR 'admission' = ANY(${n.categories}))
        OR
        (NOT ('academic' = ANY(${n.categories})) AND NOT ('admission' = ANY(${n.categories})) AND ${n.educationType} IS NULL)
      )`
    ),
    hostelRequiredForHostel: check(
      'hostel_required_for_hostel',
      sql`(
        ('hostel' = ANY(${n.categories}))
        OR
        (NOT ('hostel' = ANY(${n.categories})) AND ${n.hostelId} IS NULL)
      )`
    ),
    departmentAllowedOnlyWhenRelevant: check(
      'department_allowed_only_when_relevant',
      sql`(
        ('academic' = ANY(${n.categories}) OR 'workshop' = ANY(${n.categories}) OR 'administration' = ANY(${n.categories}) OR 'recruitment' = ANY(${n.categories}) OR 'admission' = ANY(${n.categories}) OR 'faculty' = ANY(${n.categories}) OR 'research' = ANY(${n.categories}) OR 'examination' = ANY(${n.categories}) OR 'result' = ANY(${n.categories}))
        OR
        (${n.departmentId} IS NULL)
      )`
    ),
  })
);

export const notificationsRelations = relations(notifications, ({ one }) => ({
  club: one(clubs, {
    fields: [notifications.clubId],
    references: [clubs.id],
  }),
  department: one(departments, {
    fields: [notifications.departmentId],
    references: [departments.id],
  }),
  hostel: one(hostels, {
    fields: [notifications.hostelId],
    references: [hostels.id],
  }),
}));
