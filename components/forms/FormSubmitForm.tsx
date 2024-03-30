'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { submitForm } from '~/actions/form.actions';
import { validateResolver } from '~/lib/validateResolver';

import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';
import { Separator } from '../ui/separator';
import { toast } from '../ui/use-toast';
import type { FormSubmitFormProps } from './FormSubmitPage';
import {
  FormElements,
  type validationProperty,
} from './interfaces/FormElements';

export default function FormSubmitForm({
  locale,
  form,
  questions,
  requiredQuestions,
  questionValidations,
  answers,
}: { locale: string } & FormSubmitFormProps) {
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
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };
  const onSubmit = async () => {
    const output = await forms.trigger();
    if (!output) return;

    const result = await submitForm(
      form.id,
      forms.getValues() as unknown as Record<string, string | number | string[]>
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
  );
}
