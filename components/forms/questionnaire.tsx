'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '~/components/buttons';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormProvider,
} from '~/components/forms';
import { toast } from '~/lib/hooks';
import { validateResolver } from '~/lib/validateResolver';

import type { ElementsType, validationProperty } from '../form/interfaces';
import { FormElements } from '../form/interfaces';

export interface QuestionnaireProps {
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
    isRequired: boolean;
    inputType: ElementsType;
    items?: string[] | undefined;
    mimeTypes?: string[] | undefined;
    range?: string[] | undefined;
    pageNumber: number;
    marks: number;
  }[][];
  requiredQuestions: string[];
  questionValidations: Record<string, validationProperty>;
  answers?: Record<string, string | number | string[] | boolean>;
}

export const Questionnaire = ({
  form,
  questions,
  requiredQuestions,
  questionValidations,
  answers,
}: QuestionnaireProps) => {
  const Router = useRouter();

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
    mode: 'onChange',
  });

  const next = async () => {
    const fields = questions[currentStep].map((question) => question.id);

    // types cannot be inferred during compile time
    const output = await forms.trigger(fields as never, {
      shouldFocus: true,
    });

    if (!output) return;
    if (currentStep < form.pages - 1) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    } else {
      await forms.handleSubmit(onSubmit)();
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };
  const onSubmit = async (values: FormData) => {
    const output = await forms.trigger();
    if (!output) return;

    console.log(output);
    console.log(values);

    toast({
      title: 'Success',
      description: 'form has been recorded',
    });
    Router.push('/');
  };

  return (
    <FormProvider {...forms}>
      <form className="space-y-8 py-4" onSubmit={forms.handleSubmit(onSubmit)}>
        {questions[currentStep].map((question) => {
          const Element = FormElements[question.inputType].formComponent;
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
                        id={question.id}
                        label={question.question}
                        required={question.isRequired}
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
        <footer className="absolute bottom-0 w-full max-w-lg pb-4 pr-4 ">
          <hr />
          <span className="flex justify-between bg-background pt-4">
            <Button
              onClick={prev}
              type="button"
              disabled={currentStep === 0 || forms.formState.isSubmitting}
            >
              Previous
            </Button>

            <Button
              onClick={next}
              type="button"
              disabled={forms.formState.isSubmitting}
            >
              {currentStep === form.pages - 1 ? 'Submit' : 'Next'}
            </Button>
          </span>
        </footer>
      </form>
    </FormProvider>
  );
};
