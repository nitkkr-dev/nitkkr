import { relations, sql } from 'drizzle-orm';
import {
  boolean,
  date,
  integer,
  json,
  jsonb,
  pgTable,
  real,
  serial,
  smallint,
  varchar,
} from 'drizzle-orm/pg-core';
import { validationProperty } from '~/components/form/interfaces/form-elements';
import { persons } from './persons.schema';

export const forms = pgTable('forms', {
  id: serial('id').primaryKey(),
  title: varchar('title').notNull(),
  description: varchar('description'),
  onSubmitMessage: varchar('on_submit_message')
    .default('Your response has been recorded.')
    .notNull(),
  isAnonymous: boolean('is_anonymous').default(false).notNull(),
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
  isPublished: boolean('is_published').default(false).notNull(),
  requiredQuestions: varchar('required_questions', { length: 3 })
    .array()
    .default(sql`'{}'`)
    .notNull(),
  questionValidations: json('question_validations').$type<
    Record<string, validationProperty>
  >(),
  type: varchar('type', {
    enum: ['all', 'academic', 'factulty feedback', 'placement', 'other'],
  }).notNull(),
});

export const formRelations = relations(forms, ({ many }) => ({
  questions: many(formQuestions),
  submissions: many(formSubmissions),
  visibleTo: many(formsVisibleToPersons),
  modifiableBy: many(formsModifiableByPersons),
}));

export const formsVisibleToPersons = pgTable('forms_visible_to_persons', {
  formId: integer('form_id')
    .references(() => forms.id)
    .notNull(),
  personId: integer('person_id')
    .references(() => persons.id)
    .notNull(),
});

export const formsVisibleToPersonsRelation = relations(
  formsVisibleToPersons,
  ({ one }) => ({
    forms: one(forms, {
      fields: [formsVisibleToPersons.formId],
      references: [forms.id],
    }),
    persons: one(persons, {
      fields: [formsVisibleToPersons.personId],
      references: [persons.id],
    }),
  })
);

export const formsModifiableByPersons = pgTable('forms_modifiable_by_persons', {
  formId: integer('form_id')
    .references(() => forms.id)
    .notNull(),
  personId: integer('person_id')
    .references(() => persons.id)
    .notNull(),
});
export const formsModifiableByPersonsRelation = relations(
  formsModifiableByPersons,
  ({ one }) => ({
    forms: one(forms, {
      fields: [formsModifiableByPersons.formId],
      references: [forms.id],
    }),
    persons: one(persons, {
      fields: [formsModifiableByPersons.personId],
      references: [persons.id],
    }),
  })
);

export const formQuestions = pgTable('form_questions', {
  id: serial('id').primaryKey(),
  formId: integer('form_id')
    .references(() => forms.id)
    .notNull(),
  question: varchar('question').notNull(),
  description: varchar('description'),
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
  pageNumber: real('page_number').default(0).notNull(),
  marks: smallint('marks').default(0).notNull(),
});

export const formQuestionsRelations = relations(
  formQuestions,
  ({ one, many }) => ({
    form: one(forms, {
      fields: [formQuestions.formId],
      references: [forms.id],
    }),
    answers: many(formAnswers),
  })
);

export const formSubmissions = pgTable('form_submissions', {
  id: serial('id').primaryKey(),
  formId: integer('form_id')
    .references(() => forms.id)
    .notNull(),
  email: varchar('email', { length: 256 }).notNull(),
  isSubmitted: boolean('is_submitted').default(false).notNull(),
});

export const formSubmissionsRelations = relations(
  formSubmissions,
  ({ one, many }) => ({
    form: one(forms, {
      fields: [formSubmissions.formId],
      references: [forms.id],
    }),
    answers: many(formAnswers),
  })
);

export const formAnswers = pgTable('form_answers', {
  id: serial('id').primaryKey(),
  questionId: integer('question_id').notNull(),
  submissionId: integer('submission_id').notNull(),
  value: jsonb('value').notNull(),
});

export const formAnswersRelations = relations(formAnswers, ({ one }) => ({
  questions: one(formQuestions, {
    fields: [formAnswers.questionId],
    references: [formQuestions.id],
  }),
  submission: one(formSubmissions, {
    fields: [formAnswers.submissionId],
    references: [formSubmissions.id],
  }),
}));
