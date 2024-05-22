'use server';

import Ajv, { type ValidateFunction } from 'ajv';
import AjvFormats from 'ajv-formats';
import { and, arrayOverlaps, eq, or } from 'drizzle-orm';
import FormInvalidResponse, {
  FormInvalidResponseProps,
} from '~/components/form/form-invalid-response';
import FormSubmitPage, {
  FormSubmitFormProps,
} from '~/components/form/form-submit-page';
import { ElementsType } from '~/components/form/interfaces/form-elements';
import { getServerAuthSession } from '~/server/auth';
import {
  db,
  formAnswers,
  formSubmissions,
  forms,
  formsModifiableByPersons,
  formsVisibleToPersons,
} from '~/server/db';

const ajv = new Ajv({
  allErrors: true,
  strict: false,
  $data: true,
});
AjvFormats(ajv);

class UserNotFoundErr extends Error {}

const schemasCache: Record<string, ValidateFunction<unknown>> = {};

export async function getFormForSubmission(id: string): Promise<{
  Element: React.ElementType;
  props: FormInvalidResponseProps | Omit<FormSubmitFormProps, 'id' | 'locale'>;
}> {
  try {
    const session = await getServerAuthSession();
    const form = await db.query.forms.findFirst({
      columns: {
        id: true,
        title: true,
        description: true,
        isPublished: true,
        isAnonymous: true,
        isSingleResponse: true,
        isEditingAllowed: true,
        isActive: true,
        isShuffled: true,
        expiryDate: true,
        onSubmitMessage: true,
        persistentUrl: true,
        requiredQuestions: true,
        questionValidations: true,
      },
      with: {
        questions: true,
      },
      where: (forms, { or, exists, eq }) =>
        and(
          session?.person.id
            ? or(
                eq(forms.isAnonymous, true),
                exists(
                  db
                    .select()
                    .from(formsModifiableByPersons)
                    .where(
                      and(
                        eq(
                          formsModifiableByPersons.personId,
                          session.person.id
                        ),
                        eq(formsModifiableByPersons.formId, forms.id)
                      )
                    )
                )
              )
            : eq(forms.isAnonymous, true),
          or(
            eq(forms.id, Number(id)),
            eq(forms.persistentUrl, id),
            arrayOverlaps(forms.oldPersistentUrls, [id])
          )
        ),
    });
    if (!form || !form.isPublished)
      return {
        Element: FormInvalidResponse,
        props: {
          type: 'FormNotFound',
        },
      };

    if (!(session?.person || form.isAnonymous)) throw new UserNotFoundErr();

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
                eq(formSubmission.formId, form.id),
                eq(formSubmission.email, session!.user.email)
              ),
          })
        : undefined;

    if (submission && !form.isEditingAllowed)
      return {
        Element: FormInvalidResponse,
        props: {
          type: 'FormEditNotAllowed',
        },
      };
    const questionElements: FormSubmitFormProps['questions'] = [];

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
        isRequired: question.isRequired,
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
          url: form.persistentUrl,
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
    const session = await getServerAuthSession();

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
        formsVisibleToPersons,
        eq(forms.id, formsVisibleToPersons.formId)
      )
      .limit(1)
      .where(
        and(
          eq(forms.id, id),
          or(
            eq(forms.isAnonymous, true),
            session?.person &&
              eq(formsVisibleToPersons.personId, session.person.id)
          )
        )
      );
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

    if (!session?.user && !form.isAnonymous) throw new UserNotFoundErr();

    if (!form.isActive)
      return { title: 'Error', description: 'Form is expired' };

    if (form.expiryDate && form.expiryDate < new Date()) {
      await db.update(forms).set({ isActive: true }).where(eq(forms.id, id));
      return { title: 'Error', description: 'Form is expired' };
    }
    await db.transaction(async (tx) => {
      if (form.isSingleResponse && !form.isAnonymous) {
        const response = await db.query.formSubmissions.findFirst({
          where: (formSubmission, { eq }) =>
            and(
              eq(formSubmission.formId, id),
              eq(formSubmission.email, session!.user.email)
            ),
        });

        if (response) {
          if (!form.isEditingAllowed)
            return { title: 'Error', description: 'Form is single response' };
          else {
            console.log('deleting response', response.id);
            await tx
              .delete(formSubmissions)
              .where(eq(formSubmissions.id, response.id));
            // return { title: 'Success', description: form.onSubmitMessage };
          }
        }
      }

      const [submission] = await tx
        .insert(formSubmissions)
        .values({
          formId: id,
          email: form.isAnonymous ? '' : session!.user.email,
        })
        .returning({ id: formSubmissions.id });

      await tx.insert(formAnswers).values(
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
    });
    return { title: 'Success', description: form.onSubmitMessage };
  } catch (error) {
    console.error('Error submitting form:', error);
    throw new Error('Failed to submit form');
  }
}
