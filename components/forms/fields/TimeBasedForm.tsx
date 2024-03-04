'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';

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
import TimeField from '@/components/inputs/time';

import useDragDrop from '../hooks/useDragDrop';
import { FormElementInstance } from '../interfaces/FormElements';

const propertiesSchema = z
  .object({
    label: z.string().min(2).max(50),
    description: z.string().max(200).optional(),
    required: z.boolean().default(false),
    placeHolder: z.string().max(50),
    formatMinimum: z
      .string()
      .regex(/^\b(?:[01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]\b$/, {
        message: 'Invalid time.',
      })
      .or(z.literal('')),
    formatMaximum: z
      .string()
      .regex(/^\b(?:[01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]\b$/, {
        message: 'Invalid time',
      })
      .or(z.literal('')),
    marks: z.coerce.number().nonnegative().default(0),
  })
  .superRefine((data, ctx) => {
    if (
      data.formatMinimum &&
      data.formatMaximum &&
      data.formatMaximum < data.formatMinimum
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.invalid_date,
        message: 'Max time should >= min time',
        path: ['formatMaximum'],
      });
    }
  });
type propertiesFormSchemaType = z.infer<typeof propertiesSchema>;

export default function DateBasedForm({
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
      formatMinimum: elementInstance.formatMinimum,
      formatMaximum: elementInstance.formatMaximum,
    },
  });
  useEffect(() => {
    form.reset({
      label: elementInstance.question,
      description: elementInstance.description,
      required: elementInstance.is_required,
      placeHolder: '',
      marks: elementInstance.marks,
      formatMinimum: elementInstance.formatMinimum || '',
      formatMaximum: elementInstance.formatMaximum || '',
    });
  }, [elementInstance, form]);

  function applyChanges(values: propertiesFormSchemaType) {
    console.log('values', values);
    const { label, description, required, formatMaximum, formatMinimum } =
      values;
    updateElement(elementInstance.Id, elementInstance.page_number, {
      ...elementInstance,
      question: label,
      description,
      is_required: required,
      formatMaximum,
      formatMinimum,
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
          name="formatMinimum"
          render={({ field }) => (
            <FormItem className="flex items-center justify-between rounded-lg border p-3 shadow-sm">
              <FormControl>
                <TimeField
                  {...field}
                  label="Minimum Time"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="formatMaximum"
          render={({ field }) => (
            <FormItem className="flex items-center justify-between rounded-lg border p-3 shadow-sm">
              <FormControl>
                <TimeField
                  {...field}
                  label="Maximum Time"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') e.currentTarget.blur();
                  }}
                />
              </FormControl>
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
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
