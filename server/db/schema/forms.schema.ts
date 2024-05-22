import { sql } from 'drizzle-orm';
import {
  boolean,
  date,
  integer,
  pgTable,
  serial,
  smallint,
  varchar,
} from 'drizzle-orm/pg-core';

export const forms = pgTable('forms', {
  id: serial('id').primaryKey(),
  title: varchar('title').notNull(),
  type: varchar('type', {
    enum: ['all', 'academic', 'factulty feedback', 'placement', 'other'],
  }).notNull(),
  description: varchar('description').notNull(),
  visibleTo: smallint('visible_to')
    .array()
    .default(sql`'{}'`)
    .notNull(),
  questions: integer('questions')
    .array()
    .default(sql`'{}'`)
    .notNull(),
  onSubmitMessage: varchar('on_submit_message')
    .default('Your response has been recorded.')
    .notNull(),
  isEditingAllowed: boolean('is_editing_allowed').notNull(),
  isSingleResponse: boolean('is_single_response').default(true).notNull(),
  isViewAnalyticsAllowed: boolean('is_view_analytics_allowed')
    .default(false)
    .notNull(),
  isShuffled: boolean('is_shuffled').default(false).notNull(),
  isCopySent: boolean('is_copy_sent').default(false).notNull(),
  isQuiz: boolean('is_quiz').default(false).notNull(),
  expiryDate: date('expiry_date', { mode: 'date' }),
  isActive: boolean('is_active').default(true).notNull(),
  persistentUrl: varchar('persistent_url'),
  oldPersistentUrls: varchar('old_persistent_urls')
    .array()
    .default(sql`'{}'`)
    .notNull(),
  isPublished: boolean('is_published').notNull(),
});

export const formQuestions = pgTable('form_questions', {
  id: serial('id').primaryKey(),
  formId: integer('form_id')
    .references(() => forms.id)
    .notNull(),
  question: varchar('question').notNull(),
  description: varchar('description').notNull(),
  isRequired: boolean('is_required').default(true).notNull(),
  inputType: varchar('input_type').notNull(),
  choices: varchar('choices')
    .array()
    .default(sql`'{}'`)
    .notNull(),
  mimeTypes: varchar('mime_types')
    .array()
    .default(sql`'{}'`)
    .notNull(),
  range: varchar('range')
    .array()
    .default(sql`'{}'`)
    .notNull(),
  pageNumber: smallint('page_number').default(0).notNull(),
  marks: smallint('marks').default(0).notNull(),
});

export const formSubmissions = pgTable('form_submissions', {
  id: serial('id').primaryKey(),
  formId: integer('form_id')
    .references(() => forms.id)
    .notNull(),
  email: varchar('email', { length: 256 }).notNull(),
});
