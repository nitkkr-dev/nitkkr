'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { form_questions, forms } from '@/prisma/generated/client';
import { submitForm } from '@/actions/form.actions';
import { validateResolver } from '@/lib/validateResolver';

import { ElementsType, FormElements } from './interfaces/FormElements';
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
  };
  questions: form_questions[];
}
export default function FormSubmitFormNewValid({
  form,
  questions,
}: FormSubmitFormProps) {
  const Router = useRouter();
  const numberOfPages =
    ~~questions.reduce(function (prev, current) {
      return prev.page_number > current.page_number ? prev : current;
    }).page_number + 1;
  console.log(numberOfPages);
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;
  const jsonSchema: {
    type: string;
    properties: { [key: string]: object };
    required: string[];
    additionalProperties: boolean;
  } = {
    type: 'object',
    properties: {
      '75': {
        type: 'string',
        format: 'date',
        formatMinimum: '2024-02-21',
        formatMaximum: '',
      },
      '76': {
        type: 'string',
        format: 'date',
        formatMinimum: '2024-02-06',
        formatMaximum: '2024-02-29',
      },
      '77': {
        type: 'string',
        format: 'date',
        formatMinimum: '',
        formatMaximum: '2024-02-26',
      },
      '78': {
        type: 'string',
        format: 'date',
        formatMinimum: '2024-02-14',
        formatMaximum: '',
      },
    },
    required: ['75', '76', '77', '78'],
    additionalProperties: false,
  };
  const resolver = (data: FormData, context: string | undefined) =>
    validateResolver(data, context, jsonSchema);
  const forms = useForm({
    context: form.id.toString(),
    resolver: resolver,
  });
  const next = async () => {
    const fields = questions
      .filter((question) => {
        const pageNumber = Math.floor(question.page_number); // Extract the integer part of the page number
        return pageNumber === currentStep; // Check if the integer part matches currentstep
      })
      .map((question) => question.id.toString());
    const output = await forms.trigger(fields as never, {
      shouldFocus: true,
    });
    console.log(output);
    if (!output) return;

    if (currentStep < numberOfPages - 1) {
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
    console.log(output);
    if (!output) return;
    const result = await submitForm(form.id, forms.getValues());
    toast(result);
    Router.push('/en/forms');
  };

  return (
    <main className="m-auto w-screen max-w-lg p-2">
      <h5>Form Title</h5>
      <h1 className="text-sky-900 text-3xl font-semibold">{form.title}</h1>
      <p className="text-gray-600">{form.description}</p>
      <Separator />
      <Form {...forms}>
        <form
          className="space-y-8 py-4"
          onSubmit={forms.handleSubmit(onSubmit)}
        >
          {questions
            .filter((question) => {
              const pageNumber = Math.floor(question.page_number); // Extract the integer part of the page number
              return pageNumber === currentStep; // Check if the integer part matches currentstep
            })
            .map((question) => {
              const Element =
                FormElements[question.input_type as ElementsType].formComponent;
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
                    name={question.id.toString() as never}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Element
                            {...field}
                            name={question.id?.toString()}
                            label={question.question}
                            required={false}
                            description={question.description || ''}
                            items={question.choices || []}
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
              {currentStep === numberOfPages - 1 && (
                <Button disabled={forms.formState.isSubmitting} type="submit">
                  Submit
                </Button>
              )}
              <Button
                type="button"
                onClick={next}
                disabled={currentStep === numberOfPages - 1}
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
