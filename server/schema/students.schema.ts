import { relations } from 'drizzle-orm';
import { boolean, char, integer, pgTable, varchar } from 'drizzle-orm/pg-core';

import { clubMembers, doctorates, persons } from '.';

export const students = pgTable('students', {
  id: integer('id')
    .primaryKey()
    .references(() => persons.id),
  rollNumber: varchar('roll_number', { length: 9 }).notNull(),
  personalEmail: varchar('personal_email', { length: 256 }).notNull(),

  // Guardian Info
  fathersName: varchar('fathers_name', { length: 100 }).notNull(),
  fathersTelephone: varchar('fathers_telephone', { length: 13 }).notNull(),
  fathersEmail: varchar('fathers_email', { length: 256 }),
  mothersName: varchar('mothers_name', { length: 100 }),
  mothersTelephone: varchar('mothers_telephone'),
  localGuardiansName: varchar('local_guardians_name', { length: 100 }),
  localGuardiansTelephone: varchar('local_guardians_telephone', {
    length: 100,
  }),

  // Address
  permanentAddress: varchar('permanent_address'),
  pincode: char('pincode', { length: 6 }),

  // Admission
  applicationNumber: varchar('application_number'),
  candidateCategory: varchar('candidate_category', {
    enum: ['GEN-EWS', 'OBC-NCL', 'OP', 'SC', 'ST'],
  }).notNull(),
  isPwd: boolean('is_pwd').default(false).notNull(),
  admissionCategory: varchar('admission_category', {
    enum: ['DASA', 'MEA', 'OPEN', 'SII'],
  }).notNull(),
  admissionSubcategory: varchar('admission_subcategory', {
    enum: ['CIWG', 'CSAB', 'SAARC'],
  }),
});

export const studentsRelations = relations(students, ({ many, one }) => ({
  // TODO: Explore possibility to make a transitive relation to clubs
  clubMembers: many(clubMembers),
  doctorates: many(doctorates),
  person: one(persons, {
    fields: [students.id],
    references: [persons.id],
  }),
}));
