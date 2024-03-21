'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';
import CheckboxGeneric from './Checkbox';
import DateField from './date';
import DateTimeField from './date-time';
import EmailField from './email';
import FileUpload from './fileUpload';
import MultiSelectDropdown from './multiSelectItem';
import NumberField from './numberfield';
import RadioGeneric from './radioItems';
import SelectDropdown from './selectIItem';
import PhoneField from './telephone';
import TextField from './text';
import TextAreaGeneric from './textAreaField';
import TimeField from './time';

export default function Visualizer() {
  const schema = z.object({
    email: z.string().email('Invalid email address'),
    name: z.string().min(3, 'Name must be at least 3 characters long'),
    phone: z.coerce.number(),
    number: z.coerce.number(),
    textarea: z.string(),
    file: z.any(),
    checkbox: z.boolean(),
    dateTime: z.string(),
    date: z.string(),
    time: z.string(),
    select: z.string(),
    radio: z.string(),
    multiselect: z.string().array(),
  });
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const items = ['item1', 'item2', 'item3', 'item4', 'item5'];

  const onSubmit = (values: z.infer<typeof schema>) => {
    try {
      console.log('Form data:', values);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="ml-80 w-80 space-y-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <EmailField {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <TextField
                  {...field}
                  required
                  placeholder="beat"
                  description="something in the way"
                  errorMsg="peepeepoopoo"
                  disabled
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="textarea"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <TextAreaGeneric {...field} required disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <NumberField {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <PhoneField {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <DateField {...field} required disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FileUpload {...field} required disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="checkbox"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <CheckboxGeneric
                  description="" // Combine description within label
                  required={true}
                  {...field}
                  disabled
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dateTime"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <DateTimeField
                  description="Enter a time asdasd"
                  {...field}
                  required
                  disabled
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <TimeField description="Enter a time" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="select"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <SelectDropdown items={items} {...field} required disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="radio"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <RadioGeneric items={items} {...field} disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="multiselect"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <MultiSelectDropdown
                  items={items}
                  {...field}
                  required
                  placeholder="Enter or Select values"
                  disabled
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-primary-500 hover:bg-primary-700">
          Submit
        </Button>
      </form>
    </Form>
  );
}
