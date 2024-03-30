import { Separator } from '../ui/separator';
import FormDetails from './FormDetails';
import FormSubmitForm from './FormSubmitForm';
import {
  type ElementsType,
  type validationProperty,
} from './interfaces/FormElements';

export interface FormSubmitFormProps {
  form: {
    id: number;
    title: string;
    description: string | undefined;
    onSubmitMessage: string;
    pages: number;
  };
  questions: {
    id: string;
    question: string;
    description?: string | undefined;
    required: boolean;
    inputType: ElementsType;
    items?: string[] | undefined;
    mimeTypes?: string[] | undefined;
    range?: string[] | undefined;
    marks: number;
  }[][];
  requiredQuestions: string[];
  questionValidations: Record<string, validationProperty>;
  answers?: Record<string, string | number | string[]>;
}
export default function FormSubmitPage({
  locale,
  form,
  questions,
  requiredQuestions,
  questionValidations,
  answers,
}: { locale: string } & FormSubmitFormProps) {
  return (
    <main className="m-auto min-h-screen w-screen max-w-lg p-2">
      <FormDetails
        title={form.title}
        description={form.description}
        locale={locale}
      />
      <Separator />
      <FormSubmitForm
        locale={locale}
        form={form}
        questions={questions}
        requiredQuestions={requiredQuestions}
        questionValidations={questionValidations}
        answers={answers}
      />
    </main>
  );
}
