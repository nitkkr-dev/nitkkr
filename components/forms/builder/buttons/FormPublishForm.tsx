'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { FaSpinner } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

import { Button } from '~/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { finalFormSchema } from '~/schemas/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover';
import { cn } from '~/lib/utils';
import { Calendar } from '~/components/ui/calendar';
import { Textarea } from '~/components/ui/textarea';
import { Switch } from '~/components/ui/switch';
import {
  AlertDialogCancel,
  AlertDialogFooter,
} from '~/components/ui/alert-dialog';
import { type forms } from '~/prisma/generated/client';
import { toast } from '~/components/ui/use-toast';
import { PublishForm } from '~/actions/form.actions';

import useDragDrop from '../../hooks/useDragDrop';

export default function FormPublishForm({ sForm }: { sForm: forms }) {
  const router = useRouter();
  const { elements, is_quiz } = useDragDrop();
  const form = useForm<z.infer<typeof finalFormSchema>>({
    resolver: zodResolver(finalFormSchema),
    defaultValues: {
      title: sForm.title,
      description: sForm.description ?? undefined,
      on_submit_message: sForm.on_submit_message,
      is_editing_allowed: sForm.is_editing_allowed,
      is_single_response: sForm.is_single_response,
      is_shuffled: sForm.is_shuffled,
      is_view_analytics_allowed: sForm.is_view_analytics_allowed,
      is_anonymous: sForm.is_anonymous,
    },
    mode: 'onSubmit',
  });
  async function publishForm(formData: z.infer<typeof finalFormSchema>) {
    if (elements.flat().length === 0) {
      toast({
        title: 'Error',
        description: 'No questions added to the form',
      });
      document.getElementById('cancel')?.click();
      return;
    }
    try {
      console.log('Form data', formData);
      const validatedFields = finalFormSchema.safeParse(formData);
      if (!validatedFields.success) {
        throw new Error('Invalid form data');
      }

      const newElements = elements.flat();

      await PublishForm(
        { ...validatedFields.data, is_quiz },
        sForm.id,
        newElements
      );
      toast({
        title: 'Success',
        description: 'Your form is now available to the public',
      });
      router.refresh();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong',
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(publishForm)}
        className="text-foreground space-y-2 md:w-[36rem]"
      >
        <div className="md:flex">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="max-w-80 md:w-[50%] md:pr-4">
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Form Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="max-w-80 md:w-[50%]">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Provide a short description of the form"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="md:flex">
          <FormField
            control={form.control}
            name="on_submit_message"
            render={({ field }) => (
              <FormItem className="max-w-80 md:w-[50%] md:pr-4">
                <FormLabel>Submit Message</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="expiry_date"
            render={({ field }) => (
              <FormItem className="w-[50%]">
                <FormLabel>Expiry Date</FormLabel>
                <Popover modal={true}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-[240px] pl-3 text-left font-normal',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="z-[250] w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date: Date) => date < new Date()}
                      className="z-[250]"
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="md:flex ">
          <div className="md:w-[50%]">
            <FormField
              control={form.control}
              name="is_editing_allowed"
              render={({ field }) => (
                <FormItem className="relative flex flex-row items-center justify-between py-3 md:pr-3">
                  <FormLabel className="mr-2 mt-2">Can be Edited</FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage className="absolute bottom-[-20%] leading-3" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="is_single_response"
              render={({ field }) => (
                <FormItem className="relative flex flex-row items-center justify-between py-3 md:pr-3">
                  <FormLabel className="mr-2 mt-2">
                    Only single Response allowed
                  </FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage className="absolute bottom-[-20%] leading-3" />
                </FormItem>
              )}
            />
          </div>
          <div className="md:w-[50%]">
            <FormField
              control={form.control}
              name="is_shuffled"
              render={({ field }) => (
                <FormItem className="relative flex flex-row items-center justify-between py-3 md:px-3">
                  <FormLabel className="mr-2 mt-2">Shuffled</FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage className="absolute bottom-[-20%] leading-3" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="is_view_analytics_allowed"
              render={({ field }) => (
                <FormItem className="relative flex flex-row items-center justify-between py-3 md:px-3">
                  <FormLabel className="mr-2 mt-2">
                    Able to View Analytics
                  </FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage className="leading-3  sm:absolute sm:bottom-[-20%]" />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="is_anonymous"
            render={({ field }) => (
              <FormItem className="relative flex flex-row items-center justify-between py-3 md:px-3">
                <FormLabel className="mr-2 mt-2">
                  Will the form be anonymous ?
                </FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage className="absolute bottom-[-1%] leading-3" />
              </FormItem>
            )}
          />
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel id="cancel">Cancel</AlertDialogCancel>
          <Button type="submit" disabled={form.formState.isLoading}>
            Proceed{' '}
            {form.formState.isLoading && <FaSpinner className="animate-spin" />}
          </Button>
        </AlertDialogFooter>
      </form>
    </Form>
  );
}
