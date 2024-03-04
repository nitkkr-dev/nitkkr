'use client';

import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

import useDragDrop from '../hooks/useDragDrop';
import { FormElementInstance } from '../interfaces/FormElements';

const choiceArray = z.object({
  choice: z.string().min(2),
});
const propertiesSchema = z.object({
  label: z.string().min(2).max(50),
  description: z.string().max(200).optional(),
  required: z.boolean().default(false),
  placeHolder: z.string().max(50),
  marks: z.coerce.number().nonnegative().default(0),
  choices: z.array(choiceArray).min(2),
});

type propertiesFormSchemaType = z.infer<typeof propertiesSchema>;

export default function DropdownForm({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const { updateElement, is_quiz } = useDragDrop();
  const form = useForm<propertiesFormSchemaType>({
    resolver: zodResolver(propertiesSchema),
    mode: 'onBlur',
    defaultValues: {
      label: elementInstance.question,
      description: elementInstance.description || '',
      required: elementInstance.is_required,
      placeHolder: '',
      marks: elementInstance.marks,
      choices: elementInstance.choices?.map((choiceVal) => {
        return { choice: choiceVal };
      }) || [{ choice: 'first choice' }, { choice: 'second choice' }],
    },
  });
  const {
    fields: fall,
    append,
    remove,
  } = useFieldArray({
    control: form.control,
    name: 'choices',
  });

  useEffect(() => {
    form.reset({
      label: elementInstance.question,
      description: elementInstance.description,
      required: elementInstance.is_required,
      placeHolder: '',
      marks: elementInstance.marks,
      choices: elementInstance.choices?.map((choiceVal) => {
        return { choice: choiceVal };
      }) || [{ choice: 'first choice' }, { choice: 'second choice' }],
    });
  }, [elementInstance, form]);

  function applyChanges(values: propertiesFormSchemaType) {
    const { label, description, required, choices } = values;
    updateElement(elementInstance.Id, elementInstance.page_number, {
      ...elementInstance,
      question: label,
      description,
      is_required: required,
      choices: choices.map((choiceObj) => choiceObj.choice) || [],
    });
  }

  return (
    <Form {...form}>
      <form
        onBlur={form.handleSubmit(applyChanges)}
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="space-y-3"
      >
        <FormField
          control={form.control}
          name="label"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  label="Label"
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormDescription>
                The label of the field. <br /> It will be displayed above the
                field
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="placeHolder"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  label="PlaceHolder"
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormDescription>The placeholder of the field.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  label="Description"
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormDescription>
                The helper text of the field. <br />
                It will be displayed below the field.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="required"
          render={({ field }) => (
            <FormItem className="flex items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <FormLabel>Required</FormLabel>
                <FormDescription>
                  The helper text of the field. <br />
                  It will be displayed below the field.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={'choices.0.choice'}
          render={({ field }) => (
            <div className="flex items-start justify-center gap-2">
              <FormItem className="flex-grow">
                <FormControl>
                  <Input label="Choice 1" placeholder="Review" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            </div>
          )}
        />
        <FormField
          control={form.control}
          name={'choices.1.choice'}
          render={({ field }) => (
            <div className="flex items-start justify-center gap-2">
              <FormItem className="flex-grow">
                <FormControl>
                  <Input label="Choice 2" placeholder="Review" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            </div>
          )}
        />
        {fall
          .filter((_, index) => index > 1)
          .map((name, index) => (
            <div className="flex gap-2" key={index + 2}>
              <FormField
                control={form.control}
                name={`choices.${index + 2}.choice`}
                render={({ field }) => (
                  <div className="flex items-start justify-center gap-2">
                    <FormItem className="flex-grow">
                      <FormControl key={`in${index + 2}`}>
                        <Input
                          label={`Choice ${index + 3}`}
                          placeholder="Review"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  </div>
                )}
              />
              <Button
                type="button"
                className="mt-6"
                onClick={() => remove(index + 2)}
              >
                trash
              </Button>
            </div>
          ))}
        <button type="button" onClick={() => append({ choice: `` })}>
          Append
        </button>
        {is_quiz ? (
          <FormField
            control={form.control}
            name="marks"
            render={({ field }) => (
              <FormItem className="flex items-center justify-between rounded-lg border p-3 shadow-sm">
                <div className="space-y-0.5">
                  <FormLabel>Marks</FormLabel>
                </div>
                <FormControl>
                  <Input
                    {...field}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') e.currentTarget.blur();
                    }}
                    type="number"
                    min={0}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ) : (
          ''
        )}
      </form>
    </Form>
  );
}
