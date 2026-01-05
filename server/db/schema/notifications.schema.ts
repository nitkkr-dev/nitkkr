import { check, pgTable, uniqueIndex } from 'drizzle-orm/pg-core';
import { relations, sql } from 'drizzle-orm';

import { clubs } from './clubs.schema';
import { departments } from './departments.schema';
import { hostels } from './hostels.schema';

export const notifications = pgTable(
  'notifications',
  (t) => ({
    id: t.serial('id').primaryKey(),
    title: t.varchar('title', { length: 256 }).unique().notNull(),
    content: t.text('content'),
    category: t
      .varchar('category', {
        enum: [
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
        ],
      })
      .notNull(),
    educationType: t.varchar('education_type', {
      enum: ['ug', 'pg', 'phd'],
    }),
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
    // Club ONLY for student activities
    clubRequiredForStudent: check(
      'club_required_for_student',
      sql`(
        (${n.category} = 'student-activities')
        OR
        (${n.category} != 'student-activities' AND ${n.clubId} IS NULL)
      )`
    ),
    educationTypeRequiredForAcademicAdmission: check(
      'education_type_required_for_academic_admission',
      sql`(
        (${n.category} IN ('academic','admission'))
        OR
        (${n.category} NOT IN ('academic','admission') AND ${n.educationType} IS NULL)
      )`
    ),
    hostelRequiredForHostel: check(
      'hostel_required_for_hostel',
      sql`(
        (${n.category} = 'hostel')
        OR
        (${n.category} != 'hostel' AND ${n.hostelId} IS NULL)
      )`
    ),
    departmentAllowedOnlyWhenRelevant: check(
      'department_allowed_only_when_relevant',
      sql`(
        (${n.category} IN ('academic','workshop','administration','recruitment','admission','faculty','research','examination','result'))
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
