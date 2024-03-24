'use server';

import Ajv, { type ValidateFunction } from 'ajv';
import AjvFormats from 'ajv-formats';
import { revalidatePath } from 'next/cache';

import {
  type ElementsType,
  FormElements,
} from '~/components/forms/interfaces/FormElements';
import { and, eq, or } from 'drizzle-orm';
import { db } from '~/server/db';
import {
  forms,
  formsModifiableByPersons,
  formQuestions,
  formSubmissions,
  formAnswers,
} from '~/server/schema';
import {
  finalFormSchema,
  formSchema,
  type formSchemaType,
} from '~/schemas/form';
import type { validationProperty } from '~/components/forms/interfaces/FormElements';
import FormSubmitPage, {
  type FormSubmitFormProps,
} from '~/components/forms/FormSubmitPage';
import FormInvalidResponse, {
  type FormInvalidResponseProps,
} from '~/components/forms/FormInvalidResponse';

const ajv = new Ajv({
  allErrors: true,
  strict: false,
  $data: true,
});
AjvFormats(ajv);

const schemasCache: Record<string, ValidateFunction<unknown>> = {};

//TODO
async function currentUser() {
  return { id: 1, email: 'example@nitkkr.ac.in' };
}
class UserNotFoundErr extends Error {}

export async function createForm(values: formSchemaType) {
  const validation = formSchema.safeParse(values);
  if (!validation.success) {
    console.error('Invalid form data:', validation.error);
    throw new Error(`Invalid form data: ${validation.error.message}`);
  }

  const user = await currentUser();
  if (!user) throw new UserNotFoundErr();

  try {
    return await db.transaction(async (tx) => {
      const [form] = await db
        .insert(forms)
        .values({
          title: values.title,
          description: values.description ?? '',
          isEditingAllowed: values.isEditable,
        })
        .returning({ insertedId: forms.id });
      await db
        .insert(formsModifiableByPersons)
        .values({ formId: form.insertedId, personId: user.id });
      revalidatePath('/forms');
      return form.insertedId;
    });
  } catch (error) {
    console.error('Error creating form:', error);
    throw new Error('Failed to create form');
  }
}

export async function getForms() {
  const user = await currentUser();
  if (!user) throw new UserNotFoundErr();

  try {
    return db
      .select({
        id: forms.id,
        title: forms.title,
        description: forms.description,
        isPublished: forms.isPublished,
        isActive: forms.isActive,
      })
      .from(forms)
      .innerJoin(
        formsModifiableByPersons,
        eq(forms.id, formsModifiableByPersons.formId)
      )
      .where(eq(formsModifiableByPersons.personId, user.id));
  } catch (error) {
    console.error('Error retrieving forms:', error);
    throw new Error('Failed to retrieve forms');
  }
}

export async function getFormById(id: number) {
  const user = await currentUser();
  if (!user) throw new UserNotFoundErr();

  try {
    return db
      .selectDistinct()
      .from(forms)
      .where(eq(forms.id, id))
      .innerJoin(
        formsModifiableByPersons,
        eq(formsModifiableByPersons.personId, forms.id)
      );
  } catch (error) {
    console.error('Error retrieving form:', error);
    throw new Error('Failed to retrieve form');
  }
}

interface new_form_questions {
  Id: string;
  id?: number;
  question: string;
  description?: string | undefined;
  isRequired: boolean;
  inputType: ElementsType;
  choices?: string[] | undefined;
  mimeTypes?: string[] | undefined;
  range?: string[] | undefined;
  pageNumber: number;
  marks: number;
  formatMinimum?: string;
  formatMaximum?: string;
}

export async function UpdateFormQuestions(
  formId: number,
  questions: new_form_questions[]
) {
  try {
    const user = await currentUser();
    if (!user) throw new UserNotFoundErr();
    const properties: Record<string, validationProperty> = {};
    const requiredQuestions: string[] = [];
    const upsertOperations = questions.map(async (question, index) => {
      const { id, pageNumber } = question;
      const pageNumberWithIndex = pageNumber + index * 0.001;
      const [questionFinal] = id
        ? await db
            .insert(formQuestions)
            .values({
              id,
              question: question.question,
              description: question.description,
              isRequired: question.isRequired,
              inputType: question.inputType,
              choices: question.choices,
              mimeTypes: question.mimeTypes,
              range: question.range,
              marks: question.marks,
              formId,
              pageNumber: pageNumberWithIndex,
            })
            .onConflictDoUpdate({
              target: formQuestions.id,
              set: {
                question: question.question,
                description: question.description,
                isRequired: question.isRequired,
                inputType: question.inputType,
                choices: question.choices,
                mimeTypes: question.mimeTypes,
                range: question.range,
                marks: question.marks,
                formId,
                pageNumber: pageNumberWithIndex,
              },
            })
            .returning()
        : await db
            .insert(formQuestions)
            .values({
              question: question.question,
              description: question.description,
              isRequired: question.isRequired,
              inputType: question.inputType,
              choices: question.choices,
              mimeTypes: question.mimeTypes,
              range: question.range,
              marks: question.marks,
              formId,
              pageNumber: pageNumberWithIndex,
            })
            .returning();

      if (
        FormElements[questionFinal.inputType as ElementsType].shouldValidate
      ) {
        properties[questionFinal.id.toString()] =
          FormElements[questionFinal.inputType as ElementsType].schemaObjects!(
            question
          );
        questionFinal.isRequired &&
          requiredQuestions.push(questionFinal.id.toString());
      }
    });

    await Promise.all(upsertOperations);
    return db
      .update(forms)
      .set({
        questionValidations: properties,
        requiredQuestions,
      })
      .where(eq(forms.id, formId));
  } catch (error) {
    console.error('Error updating form questions:', error);
    throw new Error('Failed to update form questions');
  }
}

export async function updateFormQuestionsForSubmission(
  formId: number,
  questions: new_form_questions[]
) {
  try {
    const user = await currentUser();
    if (!user) throw new UserNotFoundErr();

    const properties: Record<string, validationProperty> = {};
    const requiredQuestions: string[] = [];

    const upsertOperations = questions.map(async (question, index) => {
      const { id, pageNumber } = question;
      const pageNumberWithIndex = pageNumber + index * 0.001;
      const [questionFinal] = id
        ? await db
            .insert(formQuestions)
            .values({
              id,
              question: question.question,
              description: question.description,
              isRequired: question.isRequired,
              inputType: question.inputType,
              choices: question.choices,
              mimeTypes: question.mimeTypes,
              range: question.range,
              marks: question.marks,
              formId,
              pageNumber: pageNumberWithIndex,
            })
            .onConflictDoUpdate({
              target: formQuestions.id,
              set: {
                question: question.question,
                description: question.description,
                isRequired: question.isRequired,
                inputType: question.inputType,
                choices: question.choices,
                mimeTypes: question.mimeTypes,
                range: question.range,
                marks: question.marks,
                formId,
                pageNumber: pageNumberWithIndex,
              },
            })
            .returning()
        : await db
            .insert(formQuestions)
            .values({
              question: question.question,
              description: question.description,
              isRequired: question.isRequired,
              inputType: question.inputType,
              choices: question.choices,
              mimeTypes: question.mimeTypes,
              range: question.range,
              marks: question.marks,
              formId,
              pageNumber: pageNumberWithIndex,
            })
            .returning();

      if (
        FormElements[questionFinal.inputType as ElementsType].shouldValidate
      ) {
        properties[questionFinal.id.toString()] =
          FormElements[questionFinal.inputType as ElementsType].schemaObjects!(
            question
          );
        questionFinal.isRequired &&
          requiredQuestions.push(questionFinal.id.toString());
      }
    });

    await Promise.all(upsertOperations);
    return { properties, requiredQuestions };
  } catch (error) {
    console.error('Error updating form questions for submission:', error);
    throw new Error('Failed to update form questions for submission');
  }
}

interface formSum {
  title: string;
  onSubmitMessage: string;
  isEditingAllowed: boolean;
  isSingleResponse: boolean;
  isAnonymous: boolean;
  isViewAnalyticsAllowed: boolean;
  description?: string;
  expiryDate?: Date;
  isQuiz: boolean;
}

export async function publishForm(
  form: formSum,
  id: number,
  questions: new_form_questions[]
) {
  try {
    const validatedFields = finalFormSchema.safeParse(form);
    if (!validatedFields.success) {
      throw new Error('Invalid form data');
    }

    const { properties, requiredQuestions } =
      await updateFormQuestionsForSubmission(id, questions);
    revalidatePath('/forms');
    await db
      .update(forms)
      .set({
        title: form.title,
        description: form.description,
        onSubmitMessage: form.onSubmitMessage,
        isSingleResponse: form.isSingleResponse,
        isAnonymous: form.isAnonymous,
        isViewAnalyticsAllowed: form.isViewAnalyticsAllowed,
        expiryDate: form.expiryDate,
        isQuiz: form.isQuiz,
        isPublished: true,
        questionValidations: properties,
        requiredQuestions: requiredQuestions,
      })
      .where(eq(forms.id, id));
  } catch (error) {
    console.error('Error publishing form:', error);
    throw new Error('Failed to publish form');
  }
}

export async function getFormByIdWithQuestions(id: number) {
  try {
    const user = await currentUser();
    if (!user) throw new UserNotFoundErr();
    return await db.query.forms.findFirst({
      with: {
        questions: true,
      },
      where: (forms, { or, exists, eq }) =>
        user.id
          ? or(
              eq(forms.isAnonymous, true),
              exists(
                db
                  .select()
                  .from(formsModifiableByPersons)
                  .where(
                    and(
                      eq(formsModifiableByPersons.personId, user.id),
                      eq(formsModifiableByPersons.formId, forms.id)
                    )
                  )
              )
            )
          : eq(forms.isAnonymous, true),
    });
  } catch (error) {
    console.error('Error fetching form by ID with questions:', error);
    throw new Error('Failed to fetch form by ID with questions');
  }
}

export async function getFormForSubmission(id: number): Promise<{
  Element: React.ElementType;
  props: FormInvalidResponseProps | FormSubmitFormProps;
}> {
  try {
    const user = await currentUser();
    const form = await db.query.forms.findFirst({
      with: {
        questions: true,
      },
      where: (forms, { or, exists, eq }) =>
        and(
          user.id
            ? or(
                eq(forms.isAnonymous, true),
                exists(
                  db
                    .select()
                    .from(formsModifiableByPersons)
                    .where(
                      and(
                        eq(formsModifiableByPersons.personId, user.id),
                        eq(formsModifiableByPersons.formId, forms.id)
                      )
                    )
                )
              )
            : eq(forms.isAnonymous, true),
          eq(forms.id, id)
        ),
    });
    console.log(form);
    if (!form || !form.isPublished)
      return {
        Element: FormInvalidResponse,
        props: {
          type: 'FormNotFound',
        },
      };

    if (!(user || form.isAnonymous)) throw new UserNotFoundErr();

    if (!form.isActive)
      return {
        Element: FormInvalidResponse,
        props: {
          type: 'FormExpired',
        },
      };

    if (form.expiryDate && form.expiryDate < new Date()) {
      await db.update(forms).set({ isActive: false });

      return {
        Element: FormInvalidResponse,
        props: {
          type: 'FormExpired',
        },
      };
    }

    const submission =
      !form.isAnonymous && form.isSingleResponse
        ? await db.query.formSubmissions.findFirst({
            with: {
              answers: true,
            },
            where: (formSubmission, { eq }) =>
              and(
                eq(formSubmission.formId, id),
                eq(formSubmission.email, user.email)
              ),
          })
        : undefined;

    if (submission && !form.isEditingAllowed) {
      //if (!form.modifiableBy.some((mod) => mod.id === user.id)) return <FormNotFound />;  // Impossible condition

      return {
        Element: FormInvalidResponse,
        props: {
          type: 'FormEditNotAllowed',
        },
      };
    }
    const questionElements: {
      id: string;
      question: string;
      description?: string;
      required: boolean;
      inputType: ElementsType;
      items?: string[];
      mimeTypes?: string[];
      range?: string[];
      marks: number;
    }[][] = [];

    if (form.isShuffled) {
      form.questions = form.questions.sort(() => Math.random() - 0.5);
    } else {
      form.questions = form.questions.sort(
        (a, b) => a.pageNumber - b.pageNumber
      );
    }

    form.questions.forEach((question) => {
      question.pageNumber = ~~question.pageNumber;
      if (!questionElements[question.pageNumber]) {
        questionElements[question.pageNumber] = [];
      }
      questionElements[question.pageNumber].push({
        question: question.question,
        id: question.id.toString(),
        description: question.description ?? undefined,
        required: question.isRequired,
        items: question.choices ?? [],
        range: question.range ?? [],
        mimeTypes: question.mimeTypes ?? [],
        marks: question.marks,
        inputType: question.inputType as ElementsType,
      });
    });
    const answers = submission?.answers.reduce(
      (acc: Record<string, string | number | string[]>, answer) => {
        acc[answer.questionId] = answer.value as string | number | string[];
        return acc;
      },
      {}
    );

    const pages = questionElements.length;
    return {
      Element: FormSubmitPage,
      props: {
        form: {
          id: form.id,
          title: form.title,
          description: form.description ?? undefined,
          onSubmitMessage: form.onSubmitMessage,
          pages: pages,
        },
        questions: questionElements,
        requiredQuestions: form.requiredQuestions,
        questionValidations: form.questionValidations!,
        answers: answers,
      },
    };
  } catch (error) {
    console.error('Error getting form for submission:', error);
    throw new Error('Failed to get form for submission');
  }
}

export async function submitForm(
  id: number,
  formData: Record<string, string | string[] | number>
) {
  try {
    const user = await currentUser();

    const [form] = await db
      .select({
        id: forms.id,
        title: forms.title,
        description: forms.description,
        isPublished: forms.isPublished,
        isActive: forms.isActive,
        questionValidations: forms.questionValidations,
        requiredQuestions: forms.requiredQuestions,
        isAnonymous: forms.isAnonymous,
        expiryDate: forms.expiryDate,
        isSingleResponse: forms.isSingleResponse,
        isEditingAllowed: forms.isEditingAllowed,
        onSubmitMessage: forms.onSubmitMessage,
      })
      .from(forms)
      .innerJoin(
        formsModifiableByPersons,
        eq(forms.id, formsModifiableByPersons.formId)
      )
      .limit(1)
      .where(
        and(
          eq(forms.id, id),
          or(
            eq(forms.isAnonymous, true),
            eq(formsModifiableByPersons.personId, user.id || -1)
          )
        )
      );
    console.log(form);
    if (!form || !form.isPublished)
      return { title: 'Error', description: 'Form not found' };

    if (!schemasCache[form.id]) {
      schemasCache[form.id] = ajv.compile({
        type: 'object',
        properties: form.questionValidations,
        additionalProperties: false,
        required: form.requiredQuestions,
      });
    }

    const validate = schemasCache[form.id];

    if (!validate(formData))
      return { title: 'Error', description: 'Invalid form data' };

    if (!user && !form.isAnonymous) throw new UserNotFoundErr();

    if (!form.isActive)
      return { title: 'Error', description: 'Form is expired' };

    if (form.expiryDate && form.expiryDate < new Date()) {
      await db.update(forms).set({ isActive: true }).where(eq(forms.id, id));
      return { title: 'Error', description: 'Form is expired' };
    }

    if (form.isSingleResponse && !form.isAnonymous) {
      const response = await db.query.formSubmissions.findFirst({
        where: (formSubmission, { eq }) =>
          and(
            eq(formSubmission.formId, id),
            eq(formSubmission.email, user.email)
          ),
      });

      if (response) {
        if (!form.isEditingAllowed)
          return { title: 'Error', description: 'Form is single response' };
        else {
          console.log('deleting response', response.id);
          await db
            .delete(formSubmissions)
            .where(eq(formSubmissions.id, response.id));
          // return { title: 'Success', description: form.onSubmitMessage };
        }
      }
    }

    const [submission] = await db
      .insert(formSubmissions)
      .values({
        formId: id,
        email: form.isAnonymous ? '' : user.email,
      })
      .returning({ id: formSubmissions.id });

    await db.insert(formAnswers).values(
      Object.entries(formData).reduce(
        (
          acc: {
            submissionId: number;
            questionId: number;
            value: string | number | string[];
          }[],
          [questionId, value]
        ) => {
          acc.push({
            submissionId: submission.id,
            questionId: Number(questionId),
            value,
          });
          return acc;
        },
        []
      )
    );

    return { title: 'Success', description: form.onSubmitMessage };
  } catch (error) {
    console.error('Error submitting form:', error);
    throw new Error('Failed to submit form');
  }
}
