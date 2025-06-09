'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { type Control, type FieldPath, useForm } from 'react-hook-form';
import type z from 'zod';
import { ZodFirstPartyTypeKind, type ZodSchema } from 'zod';

import { Button } from '~/components/buttons';
import { Input } from '~/components/inputs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/inputs/select';
import { CardContent, CardFooter } from '~/components/ui';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormProvider,
} from '~/components/ui/form';
import { toast } from '~/lib/hooks';
import {
  facultyPersonalDetailsSchema,
  facultyProfileSchemas,
} from '~/lib/schemas/faculty-profile';
import {
  editFacultyProfilePersonalDetails,
  upsertFacultySection,
} from '~/server/actions/faculty-profile';

export function FacultyForm({
  locale,
  topic,
  id,
  existingDetails,
}: {
  locale: string;
  topic: string;
  id?: number;
  existingDetails?: z.infer<
    (typeof facultyProfileSchemas)[keyof typeof facultyProfileSchemas]
  > | null;
}) {
  const schema =
    facultyProfileSchemas[topic as keyof typeof facultyProfileSchemas];

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues:
      existingDetails ??
      (Object.keys(schema.shape).reduce(
        (acc, key) => {
          acc[key as keyof typeof schema.shape] = undefined;
          return acc;
        },
        {} as Record<string, unknown>
      ) as z.infer<typeof schema>),
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    const result = await upsertFacultySection(topic, id ?? null, values);
    toast({
      title: result.success ? 'Success' : 'Error',
      description: result.success
        ? `Successfully ${id ? 'updated' : 'created'} ${topic} details.`
        : result.message,
      variant: result.success ? 'success' : 'error',
    });
    window.history.go(-1);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <CardContent className="grid gap-4 p-6 md:grid-cols-2">
          {renderFields(form.control, schema.shape)}
        </CardContent>
        <CardFooter className="flex justify-end border-t pt-4 ">
          <Button
            type="button"
            variant="secondary"
            className="mr-2 p-1"
            onClick={() => window.history.back()}
          >
            Cancel
          </Button>
          <Button type="submit" variant="primary" className="p-1">
            {id ? 'Update' : 'Create'}
          </Button>
        </CardFooter>
      </form>
    </FormProvider>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderFields = <T extends Record<string, any>>(
  formControl: Control<T>,
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  schemaShape: Record<string, ZodSchema<unknown> | never>
) => {
  const renderField = (fieldName: string) => {
    const fieldSchema = schemaShape[fieldName] as
      | z.ZodOptional<z.ZodString>
      | z.ZodString
      | z.ZodNumber
      | z.ZodDate
      | z.ZodEnum<[string, ...string[]]>
      | z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, Date, string | Date>
      | z.ZodEffects<
          z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodOptional<z.ZodDate>]>,
          Date | undefined,
          string | Date | undefined
        >
      | z.ZodUnion<[z.ZodDate, z.ZodString]>;
    const isOptional = fieldSchema.isOptional();

    // Generate appropriate label from field name
    const label = fieldName
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str: string) => str.toUpperCase())
      .trim();

    // Check if it's an enum field
    if (fieldSchema._def.typeName === ZodFirstPartyTypeKind.ZodEnum) {
      const enumValues = fieldSchema._def.values;
      return (
        <FormField
          key={fieldName}
          control={formControl}
          name={fieldName as unknown as FieldPath<T>}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <FormControl>
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  variant="form"
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={`Select ${label}`} />
                  </SelectTrigger>
                  <SelectContent className="z-elevated">
                    {enumValues.map((value: string) => (
                      <SelectItem key={value} value={value}>
                        {value.charAt(0).toUpperCase() + value.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    }

    const isDateField =
      fieldSchema._def.typeName === ZodFirstPartyTypeKind.ZodDate ||
      (fieldSchema._def.typeName === ZodFirstPartyTypeKind.ZodUnion &&
        Array.isArray(fieldSchema._def.options) &&
        fieldSchema._def.options.some(
          (option) =>
            option._def?.typeName === ZodFirstPartyTypeKind.ZodDate ||
            option._def?.typeName === ZodFirstPartyTypeKind.ZodString
        )) ||
      (fieldSchema._def.typeName == ZodFirstPartyTypeKind.ZodEffects &&
        fieldSchema._def.schema._def.typeName ===
          ZodFirstPartyTypeKind.ZodUnion &&
        Array.isArray(fieldSchema._def.schema._def.options) &&
        fieldSchema._def.schema._def.options.some(
          (option) =>
            (option._def?.typeName === ZodFirstPartyTypeKind.ZodOptional &&
              option._def?.innerType._def.typeName ===
                ZodFirstPartyTypeKind.ZodDate) ||
            option._def?.typeName === ZodFirstPartyTypeKind.ZodDate
        )) ||
      fieldName.toLowerCase().includes('date');
    const isNumberField =
      fieldSchema._def.typeName === ZodFirstPartyTypeKind.ZodNumber;

    // Default to text input
    return (
      <FormField
        key={fieldName}
        control={formControl}
        name={fieldName as unknown as FieldPath<T>}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                id={fieldName}
                label={label}
                type={isDateField ? 'date' : isNumberField ? 'number' : 'text'}
                required={!isOptional}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  };

  return Object.keys(schemaShape).map((fieldName) => {
    // Make certain fields span full width
    const isFullWidth = ['description', 'about', 'title', 'people'].includes(
      fieldName.toLowerCase()
    );

    return (
      <div key={fieldName} className={isFullWidth ? 'md:col-span-2' : ''}>
        {renderField(fieldName)}
      </div>
    );
  });
};

export function FacultyPersonalDetailsForm({
  locale,
  existingDetails,
}: {
  locale: string;
  existingDetails: z.infer<typeof facultyPersonalDetailsSchema>;
}) {
  const form = useForm<z.infer<typeof facultyPersonalDetailsSchema>>({
    resolver: zodResolver(facultyPersonalDetailsSchema),
    defaultValues: existingDetails,
  });

  const onSubmit = async (
    values: z.infer<typeof facultyPersonalDetailsSchema>
  ) => {
    const result = await editFacultyProfilePersonalDetails(values);
    toast({
      title: result.success ? 'Success' : 'Error',
      description: result.success
        ? `Successfully updated personal details.`
        : result.message,
      variant: result.success ? 'success' : 'error',
    });
    window.history.go(-1);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <CardContent className="grid gap-4 p-6 md:grid-cols-2">
          {renderFields(form.control, facultyPersonalDetailsSchema.shape)}
        </CardContent>
        <CardFooter className="flex justify-end border-t pt-4 ">
          <Button
            type="button"
            variant="secondary"
            className="mr-2 p-1"
            onClick={() => window.history.back()}
          >
            Cancel
          </Button>
          <Button type="submit" variant="primary" className="p-1">
            {'Update'}
          </Button>
        </CardFooter>
      </form>
    </FormProvider>
  );
}
