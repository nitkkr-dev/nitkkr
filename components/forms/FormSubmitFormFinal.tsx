'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { submitForm } from '~/actions/form.actions';
import { validateResolver } from '~/lib/validateResolver';

import {
  type ElementsType,
  FormElements,
  type validationProperty,
} from './interfaces/FormElements';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { toast } from '../ui/use-toast';

interface FormSubmitFormProps {
  form: {
    id: number;
    title: string;
    description: string | undefined;
    on_submit_message: string;
    pages: number;
  };
  questions: {
    id: string;
    question: string;
    description?: string | undefined;
    required: boolean;
    input_type: ElementsType;
    items?: string[] | undefined;
    mime_types?: string[] | undefined;
    range?: string[] | undefined;
    marks: number;
  }[][];
  requiredQuestions: string[];
  questionValidations: Record<string, validationProperty>;
  answers?: Record<string, string | number | string[]>;
}
export default function FormSubmitFormFinal({
  form,
  questions,
  requiredQuestions,
  questionValidations,
  answers,
}: FormSubmitFormProps) {
  const Router = useRouter();
  console.log(form.pages);
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;
  const jsonSchema: {
    type: string;
    properties: Record<string, validationProperty>;
    required: string[];
    additionalProperties: boolean;
  } = {
    type: 'object',
    properties: questionValidations,
    required: requiredQuestions,
    additionalProperties: false,
  };
  const resolver = (data: FormData, context: string | undefined) =>
    validateResolver(data, context, jsonSchema);
  const forms = useForm({
    context: form.id.toString(),
    resolver: resolver,
    defaultValues: answers,
  });
  const next = async () => {
    const fields = questions[currentStep].map((question) => question.id);
    console.log(forms.getValues());
    // types cannot be inferred during compile time
    const output = await forms.trigger(fields as never, {
      shouldFocus: true,
    });
    console.log(fields);
    console.log(output);
    if (!output) return;

    if (currentStep < form.pages - 1) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };
  const onSubmit = async () => {
    console.log(forms.getValues());
    const output = await forms.trigger();
    console.log(forms.getValues());
    console.log(output);
    if (!output) return;
    const result = await submitForm(form.id, forms.getValues());
    toast(result);
    Router.push('/en/forms');
  };

  return (
    <main className="m-auto min-h-screen w-screen max-w-lg p-2">
      <h5>Form Title</h5>
      <h1 className="text-sky-900 text-3xl font-semibold">{form.title}</h1>
      <p className="text-gray-600">{form.description}</p>
      <Separator />
      <Form {...forms}>
        <form
          className="space-y-8 py-4"
          onSubmit={forms.handleSubmit(onSubmit)}
        >
          {questions[currentStep].map((question) => {
            const Element = FormElements[question.input_type].formComponent;
            return (
              <motion.div
                key={question.id}
                initial={{ x: delta > 0 ? 100 : -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: delta > 0 ? -100 : 100, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <FormField
                  control={forms.control}
                  name={question.id as never} // types cannot be inferred during compile time
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Element
                          {...field}
                          label={question.question}
                          required={false}
                          description={question.description ?? ''}
                          items={question.items ?? []}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
            );
          })}
          {/*TODO background of absolute*/}
          <div className="absolute bottom-0 w-full max-w-lg pb-4 pr-4 ">
            <Separator />
            <div className="flex justify-between pt-4">
              <Button onClick={prev} type="button" disabled={currentStep === 0}>
                Previous
              </Button>
              {currentStep === form.pages - 1 && (
                <Button disabled={forms.formState.isSubmitting} type="submit">
                  Submit
                </Button>
              )}
              <Button
                type="button"
                onClick={next}
                disabled={currentStep === form.pages - 1}
              >
                Next
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </main>
  );
}
