'use server';
import FormEditNotAllowed from '@/components/forms/FormEditNotAllowed';
import FormExpired from '@/components/forms/FormExpired';
import FormNotFound from '@/components/forms/FormNotFound';
import FormSingleResponse from '@/components/forms/FormSingleResponse';
import FormSubmitForm from '@/components/forms/FormSubmitForm';
import { ElementsType } from '@/components/forms/interfaces/FormElements';
import prisma from '@/lib/prisma';
import { finalFormSchema, formSchema, formSchemaType } from '@/schemas/form';
import { form_questions, forms } from '@/prisma/generated/client';
import { revalidatePath } from 'next/cache';
import exp from 'constants';

//TODO
async function currentUser() {
  return { id: 1, institute_email: 'akr@gmail.com' };
}
class UserNotFoundErr extends Error {}

// All forms analytics
// export async function getFormStats() {
//   const user = await currentUser();
//   if (!currentUser) console.log("User not logged in");
//   const stats = await prisma.forms.aggregate({
//     where: {
//       userId: user.id,
//     },
//     _sum: {
//       visits: true,
//       submissions: true,
//     },
//   });

//   const visits = stats._sum.visits || 0;
//   const submissions = stats._sum.submissions || 0;

//   const submissionRate = visits ? (submissions / visits) * 100 : 0;
//   const bounceRate = 100 - submissionRate;

//   return {
//     visits,
//     submissions,
//     submissionRate,
//     bounceRate,
//   };
// }
export async function CreateForm(values: formSchemaType) {
  const validation = formSchema.safeParse(values);
  if (!validation.success) {
    throw new Error('Invalid form data');
  }
  const user = await currentUser();

  if (!user) throw new UserNotFoundErr();

  try {
    const form = await prisma.forms.create({
      data: {
        title: values.title,
        description: values.description || '',
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
  } catch (e) {
    throw new Error('something went wrong');
  }
}

export async function getForms() {
  const user = await currentUser();
  if (!user) throw new UserNotFoundErr();

  return prisma.forms.findMany({
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
}

export async function getFormById(id: number) {
  const user = await currentUser();
  if (!user) throw new UserNotFoundErr();

  return prisma.forms.findUnique({
    where: {
      id,
      modifiable_by: {
        some: {
          id: user.id,
        },
      },
    },
  });
}

type new_form_questions = {
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
};

export async function UpdateFormQuestions(
  form_id: number,
  questions: new_form_questions[]
) {
  const user = await currentUser();
  if (!user) throw new UserNotFoundErr();
  const upsertOperations = questions.map(async (question, index) => {
    const { Id, id, page_number, ...rest } = question;
    const page_number_with_index = page_number + index * 0.001;
    if (!id)
      return prisma.form_questions.create({
        data: {
          ...rest,
          form_id,
          page_number: page_number_with_index,
        },
      });
    else {
      return prisma.form_questions.upsert({
        where: {
          id,
        },
        update: rest,
        create: {
          ...rest,
          form_id: id,
          page_number: page_number_with_index,
        },
      });
    }
  });

  await Promise.all(upsertOperations);
}

type formSum = Omit<
  forms,
  | 'id'
  | 'is_published'
  | 'questions'
  | 'is_active'
  | 'persistent_url'
  | 'old_persistent_urls'
  | 'description'
  | 'expiry_date'
> & { description?: string; expiry_date?: Date };

export async function PublishForm(
  form: formSum,
  id: number,
  questions: new_form_questions[]
) {
  const validatedFields = finalFormSchema.safeParse(form);
  if (!validatedFields.success) {
    throw new Error('Invalid form data');
  }
  const newForm = {
    ...form,
    is_published: true,
    id,
  };
  await UpdateFormQuestions(id, questions);
  return prisma.forms.update({
    where: {
      id,
    },
    data: newForm,
  });
}

export async function getFormByIdWithQuestions(id: number) {
  const user = await currentUser();
  if (!user) throw new UserNotFoundErr();
  return prisma.forms.findUnique({
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
}

export async function getFormForSubmission(id: number) {
  const user = await currentUser();
  const form = await prisma.forms.findUnique({
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
      modifiable_by: true, // TODO: change to visible_to
    },
  });
  if (!form || !form.is_published) return <FormNotFound />;
  if (!(user || form.is_anonymous)) throw new UserNotFoundErr();
  if (!form.is_active) return <FormExpired />;
  if (form.expiry_date && form.expiry_date < new Date()) {
    await prisma.forms.update({
      where: {
        id,
      },
      data: {
        is_active: false,
      },
    });
    return <FormExpired />;
  }
  if (!form.is_anonymous) {
    if (!form.modifiable_by.some((mod) => mod.id === user.id))
      return <FormNotFound />;
    const response = await prisma.form_submissions.findFirst({
      where: {
        form_id: id,
        email: user.institute_email,
      },
    });
    if (!form.is_single_response && response) return <FormSingleResponse />;
    if (!form.is_editing_allowed && response) return <FormEditNotAllowed />;
  }
  if (form.is_shuffled) {
    form.form_questions = form.form_questions.sort(() => Math.random() - 0.5);
    form.form_questions = form.form_questions.map((question) => {
      question.page_number = question.page_number / 1;
      return question;
    });
  } else {
    form.form_questions = form.form_questions.sort(
      (a, b) => a.page_number - b.page_number
    );
  }
  // TODO editable form
  return (
    <FormSubmitForm
      form={{
        id: form.id,
        title: form.title,
        description: form.description || undefined,
        on_submit_message: form.on_submit_message,
      }}
      questions={form.form_questions}
    />
  );
}
export async function submitForm(id: number, formData: Record<string, any>) {
  const user = await currentUser();

  const form = await prisma.forms.findUnique({
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
      modifiable_by: true, // TODO: change to visible_to
    },
  });
  if (!form || !form.is_published)
    return { title: 'Error', description: 'Form not found' };
  if (!user && !form.is_anonymous) throw new UserNotFoundErr();
  if (
    form.modifiable_by.some((mod) => mod.id === user.id) &&
    !form.is_anonymous
  ) {
    return { title: 'Error', description: 'Form not accessible' };
  }
  if (!form.is_active)
    return { title: 'Error', description: 'Form is expired' };
  if (form.expiry_date && form.expiry_date < new Date()) {
    await prisma.forms.update({
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
    const response = await prisma.form_submissions.findFirst({
      where: {
        form_id: id,
        email: user.institute_email,
      },
    });

    if (response) {
      if (!form.is_editing_allowed)
        return { title: 'Error', description: 'Form is single response' };
      else {
        await prisma.form_submissions.delete({
          where: {
            id: response.id,
          },
        });
        return { title: 'Success', description: form.on_submit_message };
      }
    }
  }
  const submission = await prisma.form_submissions.create({
    data: {
      form_id: id,
      email: user.institute_email || '',
    },
  });
  await prisma.form_answers.createMany({
    data: Object.entries(formData).map(([questionId, answer]) => ({
      submission_id: submission.id,
      question_id: Number(questionId),
      answer,
    })),
  });
  return { title: 'Success', description: form.on_submit_message };
}
