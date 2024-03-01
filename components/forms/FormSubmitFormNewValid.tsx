import { form_questions } from '@/prisma/generated/client';
import { useState } from 'react';

interface FormSubmitFormProps {
  form: {
    id: number;
    title: string;
    description: string | undefined;
    on_submit_message: string;
  };
  questions: form_questions[];
}
function FormSubmitFormNewValid({ form, questions }: FormSubmitFormProps) {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const jsonSchema: {
    type: string;
    properties: { [key: string]: object };
    required: string[];
    additionalProperties: boolean;
  } = {
    type: 'object',
    properties: {},
    required: [],
    additionalProperties: false,
  };

  return <div>FormSubmitFormNewValid</div>;
}
export default FormSubmitFormNewValid;
