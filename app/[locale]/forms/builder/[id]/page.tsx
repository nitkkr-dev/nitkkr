import { getFormByIdWithQuestions } from '~/actions/form.actions';
import FormBuilder from '~/components/forms/builder/FormBuilder';
import type {
  ElementsType,
  FormElementInstance,
  validationProperty,
} from '~/components/forms/interfaces/FormElements';
import { idGenerator } from '~/lib/idGenerator';

async function BuilderPage({ params }: { params: { id: string } }) {
  const formWithQuestions = await getFormByIdWithQuestions(Number(params.id));
  if (!formWithQuestions) return <div>Form not found</div>;
  const { form_questions, ...form } = formWithQuestions;
  const question_validations = form.question_validations as unknown as Record<
    string,
    validationProperty
  >;
  const groupedQuestions: FormElementInstance[][] = [];
  form_questions.sort((a, b) => a.page_number - b.page_number);

  form_questions.forEach((question) => {
    const page = ~~question.page_number;

    if (!groupedQuestions[page]) {
      groupedQuestions[page] = [];
    }

    const questionWithId = {
      ...question,
      formatMaximum:
        question_validations[question.id.toString()]?.formatMaximum ??
        undefined,
      formatMinimum:
        question_validations[question.id.toString()]?.formatMinimum ??
        undefined,
      Id: idGenerator(),
      description: question.description ?? undefined,
      input_type: question.input_type as ElementsType,
      page_number: page,
    };
    groupedQuestions[page].push(questionWithId);
  });
  return <FormBuilder form={form} questions={groupedQuestions} />;
}
export default BuilderPage;
