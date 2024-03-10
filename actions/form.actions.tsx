'use server';

import Ajv, { type ValidateFunction } from 'ajv';
import AjvFormats from 'ajv-formats';
import { revalidatePath } from 'next/cache';

import {
  type ElementsType,
  FormElements,
} from '~/components/forms/interfaces/FormElements';
import { db } from '~/server/db';
import {
  finalFormSchema,
  formSchema,
  type formSchemaType,
} from '~/schemas/form';
import type { Prisma } from '~/prisma/generated/client';
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
  return { id: 1, institute_email: 'example@nitkkr.ac.in' };
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
    const form = await db.forms.create({
      data: {
        title: values.title,
        description: values.description ?? '',
        is_editing_allowed: values.isEditable,
        modifiable_by: {
          connect: {
            id: user.id,
          },
        },
      },
    });
    revalidatePath('/forms');
    return form.id;
  } catch (error) {
    console.error('Error creating form:', error);
    throw new Error('Failed to create form');
  }
}

export async function getForms() {
  const user = await currentUser();
  if (!user) throw new UserNotFoundErr();

  try {
    return db.forms.findMany({
      where: {
        modifiable_by: {
          some: {
            id: user.id,
          },
        },
      },
      select: {
        id: true,
        title: true,
        description: true,
        is_published: true,
        is_active: true,
      },
    });
  } catch (error) {
    console.error('Error retrieving forms:', error);
    throw new Error('Failed to retrieve forms');
  }
}

export async function getFormById(id: number) {
  const user = await currentUser();
  if (!user) throw new UserNotFoundErr();

  try {
    return db.forms.findUnique({
      where: {
        id,
        modifiable_by: {
          some: {
            id: user.id,
          },
        },
      },
    });
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
  is_required: boolean;
  input_type: ElementsType;
  choices?: string[] | undefined;
  mime_types?: string[] | undefined;
  range?: string[] | undefined;
  page_number: number;
  marks: number;
  formatMinimum?: string;
  formatMaximum?: string;
}

export async function UpdateFormQuestions(
  form_id: number,
  questions: new_form_questions[]
) {
  try {
    const user = await currentUser();
    if (!user) throw new UserNotFoundErr();
    const properties: Record<string, validationProperty> = {};
    const requiredQuestions: string[] = [];
    const upsertOperations = questions.map(async (question, index) => {
      const { id, page_number } = question;
      const page_number_with_index = page_number + index * 0.001;
      const questionFinal = id
        ? await db.form_questions.upsert({
            where: {
              id,
            },
            update: {
              question: question.question,
              description: question.description,
              is_required: question.is_required,
              input_type: question.input_type,
              choices: question.choices,
              mime_types: question.mime_types,
              range: question.range,
              marks: question.marks,
              page_number: page_number_with_index,
            },
            create: {
              question: question.question,
              description: question.description,
              is_required: question.is_required,
              input_type: question.input_type,
              choices: question.choices,
              mime_types: question.mime_types,
              range: question.range,
              marks: question.marks,
              form_id,
              page_number: page_number_with_index,
            },
          })
        : await db.form_questions.create({
            data: {
              question: question.question,
              description: question.description,
              is_required: question.is_required,
              input_type: question.input_type,
              choices: question.choices,
              mime_types: question.mime_types,
              range: question.range,
              marks: question.marks,
              form_id,
              page_number: page_number_with_index,
            },
          });

      if (
        FormElements[questionFinal.input_type as ElementsType].shouldValidate
      ) {
        properties[questionFinal.id.toString()] =
          FormElements[questionFinal.input_type as ElementsType].schemaObjects!(
            question
          );
        questionFinal.is_required &&
          requiredQuestions.push(questionFinal.id.toString());
      }
    });

    await Promise.all(upsertOperations);
    return db.forms.update({
      where: { id: form_id },
      data: {
        question_validations: properties as unknown as Prisma.JsonObject,
        required_questions: requiredQuestions,
      },
    });
  } catch (error) {
    console.error('Error updating form questions:', error);
    throw new Error('Failed to update form questions');
  }
}

export async function updateFormQuestionsForSubmission(
  form_id: number,
  questions: new_form_questions[]
) {
  try {
    const user = await currentUser();
    if (!user) throw new UserNotFoundErr();

    const properties: Record<string, validationProperty> = {};
    const requiredQuestions: string[] = [];

    const upsertOperations = questions.map(async (question, index) => {
      const { id, page_number } = question;
      const page_number_with_index = page_number + index * 0.001;
      const questionFinal = id
        ? await db.form_questions.upsert({
            where: {
              id: id,
            },
            update: {
              question: question.question,
              description: question.description,
              is_required: question.is_required,
              input_type: question.input_type,
              choices: question.choices,
              mime_types: question.mime_types,
              range: question.range,
              marks: question.marks,
              page_number: page_number_with_index,
            },
            create: {
              question: question.question,
              description: question.description,
              is_required: question.is_required,
              input_type: question.input_type,
              choices: question.choices,
              mime_types: question.mime_types,
              range: question.range,
              marks: question.marks,
              form_id,
              page_number: page_number_with_index,
            },
          })
        : await db.form_questions.create({
            data: {
              question: question.question,
              description: question.description,
              is_required: question.is_required,
              input_type: question.input_type,
              choices: question.choices,
              mime_types: question.mime_types,
              range: question.range,
              marks: question.marks,
              form_id,
              page_number: page_number_with_index,
            },
          });

      if (
        FormElements[questionFinal.input_type as ElementsType].shouldValidate
      ) {
        properties[questionFinal.id.toString()] =
          FormElements[questionFinal.input_type as ElementsType].schemaObjects!(
            question
          );
        questionFinal.is_required &&
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
  on_submit_message: string;
  is_editing_allowed: boolean;
  is_single_response: boolean;
  is_anonymous: boolean;
  is_view_analytics_allowed: boolean;
  description?: string;
  expiry_date?: Date;
  is_quiz: boolean;
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
    return db.forms.update({
      where: {
        id,
      },
      data: {
        ...form,
        is_published: true,
        id,
        question_validations: properties as unknown as Prisma.JsonObject,
        required_questions: requiredQuestions,
      },
    });
  } catch (error) {
    console.error('Error publishing form:', error);
    throw new Error('Failed to publish form');
  }
}

export async function getFormByIdWithQuestions(id: number) {
  try {
    const user = await currentUser();
    if (!user) throw new UserNotFoundErr();
    return db.forms.findUnique({
      where: {
        id,
        modifiable_by: {
          some: {
            id: user.id,
          },
        },
      },
      include: {
        form_questions: true,
      },
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
    const form = await db.forms.findUnique({
      where: {
        id,
        OR: [
          {
            modifiable_by: {
              some: {
                id: user.id || -1,
              },
            },
          },
          {
            is_anonymous: true,
          },
        ],
      },

      include: {
        form_questions: true,
        // modifiable_by: true, // TODO: change to visible_to // dont need this
      },
    });

    if (!form || !form.is_published)
      return {
        Element: FormInvalidResponse,
        props: {
          type: 'FormNotFound',
        },
      };

    if (!(user || form.is_anonymous)) throw new UserNotFoundErr();

    if (!form.is_active)
      return {
        Element: FormInvalidResponse,
        props: {
          type: 'FormExpired',
        },
      };

    if (form.expiry_date && form.expiry_date < new Date()) {
      await db.forms.update({
        where: {
          id,
        },
        data: {
          is_active: false,
        },
      });

      return {
        Element: FormInvalidResponse,
        props: {
          type: 'FormExpired',
        },
      };
    }

    const submission =
      !form.is_anonymous && form.is_single_response
        ? await db.form_submissions.findFirst({
            where: {
              form_id: id,
              email: user.institute_email,
            },
            include: {
              form_answers: true,
            },
          })
        : undefined;

    if (submission && !form.is_editing_allowed) {
      //if (!form.modifiable_by.some((mod) => mod.id === user.id)) return <FormNotFound />;  // Impossible condition

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
      input_type: ElementsType;
      items?: string[];
      mime_types?: string[];
      range?: string[];
      marks: number;
    }[][] = [];

    if (form.is_shuffled) {
      form.form_questions = form.form_questions.sort(() => Math.random() - 0.5);
    } else {
      form.form_questions = form.form_questions.sort(
        (a, b) => a.page_number - b.page_number
      );
    }

    form.form_questions.forEach((question) => {
      question.page_number = ~~question.page_number;
      if (!questionElements[question.page_number]) {
        questionElements[question.page_number] = [];
      }
      questionElements[question.page_number].push({
        question: question.question,
        id: question.id.toString(),
        description: question.description ?? undefined,
        required: question.is_required,
        items: question.choices ?? [],
        range: question.range ?? [],
        mime_types: question.mime_types ?? [],
        marks: question.marks,
        input_type: question.input_type as ElementsType,
      });
    });
    const answers = submission?.form_answers.reduce(
      (acc: Record<string, string | number | string[]>, answer) => {
        acc[answer.question_id] = answer.answer as string | number | string[];
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
          on_submit_message: form.on_submit_message,
          pages: pages,
        },
        questions: questionElements,
        requiredQuestions: form.required_questions,
        questionValidations: form.question_validations as unknown as Record<
          string,
          validationProperty
        >,
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

    const form = await db.forms.findUnique({
      where: {
        id,
        OR: [
          {
            modifiable_by: {
              some: {
                id: user.id || -1,
              },
            },
          },
          {
            is_anonymous: true,
          },
        ],
      },
    });

    if (!form || !form.is_published)
      return { title: 'Error', description: 'Form not found' };

    if (!schemasCache[form.id]) {
      schemasCache[form.id] = ajv.compile({
        type: 'object',
        properties: form.question_validations as unknown as Record<
          string,
          validationProperty
        >,
        additionalProperties: false,
        required: form.required_questions,
      });
    }

    const validate = schemasCache[form.id];

    if (!validate(formData))
      return { title: 'Error', description: 'Invalid form data' };

    if (!user && !form.is_anonymous) throw new UserNotFoundErr();

    if (!form.is_active)
      return { title: 'Error', description: 'Form is expired' };

    if (form.expiry_date && form.expiry_date < new Date()) {
      await db.forms.update({
        where: {
          id,
        },
        data: {
          is_active: false,
        },
      });
      return { title: 'Error', description: 'Form is expired' };
    }

    if (form.is_single_response && !form.is_anonymous) {
      const response = await db.form_submissions.findFirst({
        where: {
          form_id: id,
          email: user.institute_email,
        },
      });

      if (response) {
        if (!form.is_editing_allowed)
          return { title: 'Error', description: 'Form is single response' };
        else {
          console.log('deleting response', response.id);
          await db.form_submissions.delete({
            where: {
              id: response.id,
            },
          });
          // return { title: 'Success', description: form.on_submit_message };
        }
      }
    }

    const submission = await db.form_submissions.create({
      data: {
        form_id: id,
        email: form.is_anonymous ? '' : user.institute_email,
      },
    });

    await db.form_answers.createMany({
      data: Object.entries(formData).map(([questionId, answer]) => ({
        submission_id: submission.id,
        question_id: Number(questionId),
        answer,
      })),
    });

    return { title: 'Success', description: form.on_submit_message };
  } catch (error) {
    console.error('Error submitting form:', error);
    throw new Error('Failed to submit form');
  }
}
