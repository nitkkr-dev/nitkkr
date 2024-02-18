'use client';

import { MdTextFields } from 'react-icons/md';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';

import {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '@/components/forms/interfaces/FormElements';
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
import TextField from '@/components/inputs/text';

import useDragDrop from '../hooks/useDragDrop';

const input_type: ElementsType = 'TextField';

export const TextFieldFormElement: FormElement = {
  input_type,
  uiFieldComponent: ({
    elementInstance,
  }: {
    elementInstance: FormElementInstance;
  }) => (
    <>
      <TextField
        className="w-full"
        readOnly
        label={elementInstance.question}
        required={elementInstance.is_required}
      />
      <p className="text-muted-foreground w-full text-sm">
        {elementInstance.description}
      </p>
    </>
  ),
  formComponent: ({
    elementInstance,
    ...props
  }: {
    elementInstance: FormElementInstance;
  }) => (
    <>
      <TextField
        className="w-full"
        {...props}
        name={elementInstance.id?.toString()}
        label={elementInstance.question}
        required={elementInstance.is_required}
      />
      <p className="text-muted-foreground w-full text-sm">
        {elementInstance.description}
      </p>
    </>
  ),
  propertiesComponent: PropertiesComponent,
  construct: (Id: string, page_number: number, id?: number) => {
    return {
      Id,
      id,
      question: 'Text Field',
      input_type,
      is_required: false,
      page_number,
      marks: 0,
    };
  },
  dragBtnElement: {
    icon: MdTextFields,
    label: 'Text Field',
  },
  schemaObject: schemaObject,
  shouldValidate: true,
};

function schemaObject(required: boolean) {
  if (required) {
    return z.string().min(1, { message: 'Field is required' });
  } else {
    return z.string().optional();
  }
}

const propertiesSchema = z.object({
  label: z.string().min(2).max(50),
  description: z.string().max(200).optional(),
  required: z.boolean().default(false),
  placeHolder: z.string().max(50),
  marks: z.coerce.number().nonnegative().default(0),
});
type propertiesFormSchemaType = z.infer<typeof propertiesSchema>;

function PropertiesComponent({
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
    },
  });
  useEffect(() => {
    form.reset({
      label: elementInstance.question,
      description: elementInstance.description,
      required: elementInstance.is_required,
      placeHolder: '',
      marks: elementInstance.marks,
    });
  }, [elementInstance, form]);

  function applyChanges(values: propertiesFormSchemaType) {
    const { label, description, required } = values;
    updateElement(elementInstance.Id, elementInstance.page_number, {
      ...elementInstance,
      question: label,
      description,
      is_required: required,
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
              <FormLabel>Label</FormLabel>
              <FormControl>
                <Input
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
              <FormLabel>PlaceHolder</FormLabel>
              <FormControl>
                <Input
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
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input
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
