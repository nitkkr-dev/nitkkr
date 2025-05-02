import { relations } from 'drizzle-orm';
import { pgTable } from 'drizzle-orm/pg-core';

import { clubMembers, doctorates, persons } from '.';

export const students = pgTable('students', (t) => ({
  id: t
    .integer()
    .primaryKey()
    .references(() => persons.id),
  rollNumber: t.varchar({ length: 9 }).notNull(),
  personalEmail: t.varchar({ length: 256 }),

  // Guardian Info
  fathersName: t.varchar({ length: 100 }).notNull(),
  fathersTelephoneCountryCode: t.varchar({ length: 3 }).notNull(),
  fathersTelephone: t.varchar({ length: 13 }).notNull(),
  fathersEmail: t.varchar({ length: 256 }),
  mothersName: t.varchar({ length: 100 }),
  mothersTelephoneCountryCode: t.varchar({ length: 3 }),
  mothersTelephone: t.varchar(),
  localGuardiansName: t.varchar({ length: 100 }),
  localGuardiansTelephone: t.varchar({ length: 100 }),

  // Address
  permanentAddress: t.varchar(),
  pincode: t.char({ length: 6 }),

  // Admission
  applicationNumber: t.varchar(),
  candidateCategory: t
    .varchar({ enum: ['GEN-EWS', 'OBC-NCL', 'OPEN', 'SC', 'ST'] })
    .notNull(),
  isPwd: t.boolean().default(false).notNull(),
  admissionCategory: t
    .varchar({ enum: ['DASA', 'MEA', 'OPEN', 'SII'] })
    .notNull(),
  admissionSubcategory: t.varchar({ enum: ['CIWG', 'CSAB', 'SAARC'] }),
}));

export const studentsRelations = relations(students, ({ many, one }) => ({
  // TODO: Explore possibility to make a transitive relation to clubs
  clubMembers: many(clubMembers),
  doctorates: many(doctorates),
  person: one(persons, {
    fields: [students.id],
    references: [persons.id],
  }),
}));
