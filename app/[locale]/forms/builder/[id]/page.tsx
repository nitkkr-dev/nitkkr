//import { getFormByIdWithQuestions } from '~/actions/form.actions';
import FormBuilder from '~/components/forms/builder/FormBuilder';
import type {
  ElementsType,
  FormElementInstance,
  validationProperty,
} from '~/components/forms/interfaces/FormElements';

async function BuilderPage({ params }: { params: { id: string } }) {
  const form = {
    id: Number(params.id),
    title: 'Form',
    description: '',
    questions: [],
    on_submit_message: 'Your response has been recorded.',
    is_anonymous: false,
    is_editing_allowed: false,
    is_single_response: true,
    is_view_analytics_allowed: false,
    is_shuffled: false,
    is_copy_sent: false,
    is_quiz: false,
    expiry_date: null,
    is_active: true,
    persistent_url: null,
    old_persistent_urls: [],
    is_published: false,
    required_questions: [],
    question_validations: null,
  };
  // const formWithQuestions = await getFormByIdWithQuestions(Number(params.id));
  // if (!formWithQuestions) return <div>Form not found</div>;
  // const { form_questions, ...form } = formWithQuestions;
  // const question_validations = form.question_validations as unknown as Record<
  //   string,
  //   validationProperty
  // >;
  const groupedQuestions: FormElementInstance[][] = [];
  // form_questions.sort((a, b) => a.page_number - b.page_number);

  // form_questions.forEach((question) => {
  //   const page = ~~question.page_number;

  //   if (!groupedQuestions[page]) {
  //     groupedQuestions[page] = [];
  //   }

  //   const questionWithId = {
  //     ...question,
  //     formatMaximum:
  //       question_validations[question.id.toString()]?.formatMaximum ??
  //       undefined,
  //     formatMinimum:
  //       question_validations[question.id.toString()]?.formatMinimum ??
  //       undefined,
  //     Id: idGenerator(),
  //     description: question.description ?? undefined,
  //     input_type: question.input_type as ElementsType,
  //     page_number: page,
  //   };
  //   groupedQuestions[page].push(questionWithId);
  // });
  return <FormBuilder form={form} questions={groupedQuestions} />;
}
export default BuilderPage;
