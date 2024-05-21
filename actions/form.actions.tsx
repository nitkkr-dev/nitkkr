'use server';

import Ajv, { type ValidateFunction } from 'ajv';
import AjvFormats from 'ajv-formats';
import { and, arrayOverlaps } from 'drizzle-orm';
import FormInvalidResponse, {
  FormInvalidResponseProps,
} from '~/components/form/form-invalid-response';
import FormSubmitPage, {
  FormSubmitFormProps,
} from '~/components/form/form-submit-page';
import { ElementsType } from '~/components/form/interfaces/form-elements';
import { getServerAuthSession } from '~/server/auth';
import { db, forms, formsModifiableByPersons } from '~/server/db';

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
