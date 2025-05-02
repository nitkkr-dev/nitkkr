import { sql } from 'drizzle-orm';
import { pgTable } from 'drizzle-orm/pg-core';

export const forms = pgTable('forms', (t) => ({
  id: t.serial().primaryKey(),
  title: t.varchar().notNull(),
  description: t.varchar().notNull(),
  visibleTo: t
    .smallint()
    .array()
    .default(sql`'{}'`)
    .notNull(),
  questions: t
    .integer()
    .array()
    .default(sql`'{}'`)
    .notNull(),
  onSubmitMessage: t
    .varchar()
    .default('Your response has been recorded.')
    .notNull(),
  isEditingAllowed: t.boolean().notNull(),
  isSingleResponse: t.boolean().default(true).notNull(),
  isViewAnalyticsAllowed: t.boolean().default(false).notNull(),
  isShuffled: t.boolean().default(false).notNull(),
  isCopySent: t.boolean().default(false).notNull(),
  isQuiz: t.boolean().default(false).notNull(),
  expiryDate: t.date({ mode: 'date' }),
  isActive: t.boolean().default(true).notNull(),
  persistentUrl: t.varchar(),
  oldPersistentUrls: t
    .varchar()
    .array()
    .default(sql`'{}'`)
    .notNull(),
  isPublished: t.boolean().notNull(),
}));

export const formQuestions = pgTable('form_questions', (t) => ({
  id: t.serial().primaryKey(),
  formId: t
    .integer()
    .references(() => forms.id)
    .notNull(),
  question: t.varchar().notNull(),
  description: t.varchar().notNull(),
  isRequired: t.boolean().default(true).notNull(),
  inputType: t.varchar().notNull(),
  choices: t
    .varchar()
    .array()
    .default(sql`'{}'`)
    .notNull(),
  mimeTypes: t
    .varchar()
    .array()
    .default(sql`'{}'`)
    .notNull(),
  range: t
    .varchar()
    .array()
    .default(sql`'{}'`)
    .notNull(),
  pageNumber: t.smallint().default(0).notNull(),
  marks: t.smallint().default(0).notNull(),
}));

export const formSubmissions = pgTable('form_submissions', (t) => ({
  id: t.serial().primaryKey(),
  formId: t
    .integer()
    .references(() => forms.id)
    .notNull(),
  email: t.varchar({ length: 256 }).notNull(),
}));
