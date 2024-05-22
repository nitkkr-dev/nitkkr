'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { submitForm } from '~/actions/form.actions';
import { Button } from '~/components/ui';
import { toast } from '~/lib/hooks';
import { validateResolver } from '~/lib/validateResolver';

import { Form, FormControl, FormField, FormItem, FormMessage } from './form';
import type { FormSubmitFormProps } from './form-submit-page';
import {
  FormElements,
  type validationProperty,
} from './interfaces/form-elements';

export default function FormSubmitForm({
  form,
  locale,
  id,
  questions,
  requiredQuestions,
  questionValidations,
  answers,
}: FormSubmitFormProps) {
  const Router = useRouter();
  useEffect(() => {
    if (form.id.toString() != id && form.url != id)
      window.history.replaceState(
        {},
        '',
        `/${locale}/forms/${form.url ?? form.id}`
      );
  }, []);
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

    const result = await submitForm(
      form.id,
      values as unknown as Record<string, string | number | string[]>
    );
    toast(result);
    Router.push(`/${locale}/forms`);
  };

  return (
    <Form {...forms}>
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
    </Form>
  );
}
