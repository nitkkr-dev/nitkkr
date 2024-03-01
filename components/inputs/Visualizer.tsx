'use client';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import EmailField from './email';
import TextField from './text';
import DatePicker from './date';
import FileUpload from './fileUpload';
import CheckboxReactHookFormMultiple from './Checkbox';
import TimeField from './time';
import SelectDropdown from './selectIItem';
import { Button } from '../ui/button';
import DateTimeField from './date-time';
import RadioGeneric from './radioItems';
import CheckboxGeneric from './Checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';
<<<<<<< HEAD

interface FormValues {
  email: string;
  name: string;
  file: FileList;
  checkbox: string[];
  dateTime: string;
  time: string;
  select: string;
}
=======
import MultiSelectDropdown from './multiSelectItem';
import DateField from './date';
>>>>>>> 3134c04 (finished up with generics)

export default function Visualizer() {
  const schema = z.object({
    email: z.string().email('Invalid email address'),
    name: z.string().min(3, 'Name must be at least 3 characters long'),
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
                <TextField {...field} required />
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
                <DateField {...field} required />
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
                <FileUpload {...field} required />
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
                <DateTimeField description="Enter a time" {...field} required />
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
                <SelectDropdown items={items} {...field} required />
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
                <RadioGeneric items={items} {...field} required />
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
                <MultiSelectDropdown items={items} {...field} disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
