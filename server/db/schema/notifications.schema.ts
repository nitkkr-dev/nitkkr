import { check, pgTable, uniqueIndex } from 'drizzle-orm/pg-core';
import { relations, sql } from 'drizzle-orm';

import { clubs } from './clubs.schema';
import { departments } from './departments.schema';
import { hostels } from './hostels.schema'; // ensure this table exists

export const notifications = pgTable(
  'notifications',
  (t) => ({
    id: t.serial().primaryKey(),
    title: t.varchar({ length: 256 }).unique().notNull(),
    content: t.text(),
    category: t
      .varchar({
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
    type: t.varchar({ enum: ['ug', 'pg', 'phd', 'all'] }), // only for academic/admission
    createdAt: t.timestamp().defaultNow().notNull(),
    updatedAt: t
      .timestamp()
      .$onUpdate(() => new Date())
      .notNull(),
    clubId: t.integer().references(() => clubs.id),
    departmentId: t.integer().references(() => departments.id), // null => all depts
    hostelId: t.integer().references(() => hostels.id), // only for hostel category
  }),
  (notifications) => {
    return {
      notificationsTitleIndex: uniqueIndex('notifications_title_idx').on(
        notifications.title
      ),
      clubRequiredForStudent: check(
        'club_required_for_student',
        sql`(
          (${notifications.category} = 'student-activities' AND ${notifications.clubId} IS NOT NULL)
          OR
          (${notifications.category} != 'student-activities' AND ${notifications.clubId} IS NULL)
        )`
      ),
      // Enforce type ONLY for academic/admission
      typeRequiredForAcademicAdmission: check(
        'type_required_for_academic_admission',
        sql`(
          (${notifications.category} IN ('academic','admission') AND ${notifications.type} IS NOT NULL)
          OR
          (${notifications.category} NOT IN ('academic','admission') AND ${notifications.type} IS NULL)
        )`
      ),
      // Enforce hostelId ONLY for hostel
      hostelRequiredForHostel: check(
        'hostel_required_for_hostel',
        sql`(
          (${notifications.category} = 'hostel' AND ${notifications.hostelId} IS NOT NULL)
          OR
          (${notifications.category} != 'hostel' AND ${notifications.hostelId} IS NULL)
        )`
      ),
    };
  }
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
