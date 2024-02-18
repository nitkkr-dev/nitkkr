'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { form_questions, forms } from '@/prisma/generated/client';
import { submitForm } from '@/actions/form.actions';

import {
  ElementsType,
  FormElementInstance,
  FormElements,
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
  };
  questions: form_questions[];
}
export default function FormSubmitForm({
  form,
  questions,
}: FormSubmitFormProps) {
  const Router = useRouter();
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const questionElements: FormElementInstance[][] = [];
  const schemaObject = questions.reduce((acc, question) => {
    const page = ~~question.page_number;
    if (!questionElements[page]) {
      questionElements[page] = [];
    }
    const questionElement = {
      ...question,
      Id: question.id.toString(),
      description: question.description || undefined, // to get around postgress and js behaviour of handling empty fields
      input_type: question.input_type as ElementsType,
    };
    questionElements[page].push(questionElement);
    return FormElements[questionElement.input_type].shouldValidate
      ? {
          ...acc,
          [questionElement.Id]: FormElements[
            questionElement.input_type
          ].schemaObject(question.is_required),
        }
      : acc;
  }, {});

  const FormDataSchema = z.object(schemaObject);

  type Inputs = z.infer<typeof FormDataSchema>;

  const delta = currentStep - previousStep;

  const forms = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
  });

  type FieldName = keyof Inputs;

  const next = async () => {
    const fields = questionElements[currentStep].map((question) => question.Id);
    const output = await forms.trigger(fields as FieldName[], {
      shouldFocus: true,
    });
    console.log(output);
    if (!output) return;

    if (currentStep < questionElements.length - 1) {
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
    const result = await submitForm(form.id, forms.getValues());
    toast(result);
    Router.push('/forms');
  };

  return (
    <div className="m-auto w-screen max-w-lg p-2">
      <h5>Form Title</h5>
      <h1 className="text-sky-900 text-3xl font-semibold">{form.title}</h1>
      <p className="text-gray-600">{form.description}</p>
      <Separator />
      <Form {...forms}>
        <form
          className="space-y-8 py-4"
          onSubmit={forms.handleSubmit(onSubmit)}
        >
          {questionElements[currentStep].map((question) => {
            const Element = FormElements[question.input_type].formComponent;
            return (
              <motion.div
                key={question.Id}
                initial={{ x: delta > 0 ? 100 : -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: delta > 0 ? -100 : 100, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <FormField
                  control={forms.control}
                  name={question.Id as FieldName}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Element elementInstance={question} {...field} />
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
              {currentStep === questionElements.length - 1 && (
                <Button disabled={forms.formState.isSubmitting} type="submit">
                  Submit
                </Button>
              )}
              <Button
                type="button"
                onClick={next}
                disabled={currentStep === questionElements.length - 1}
              >
                Next
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
