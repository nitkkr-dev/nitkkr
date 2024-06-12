'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { z } from 'zod';

import { Button } from '~/components/buttons';
import { Input } from '~/components/inputs';
import { FormField, FormItem, FormMessage } from '~/components/ui';
import type { committeeMeetings } from '~/server/db';
import { type Translations } from '~/i18n/translations';
import { addEditMeeting } from '~/actions/committee.actions';
import { useToast } from '~/lib/hooks';

export default function MeetingEdit({
  number,
  meetingType,
  existingData,
  text,
}: {
  number?: number;
  meetingType: (typeof committeeMeetings.committeeType.enumValues)[number];
  existingData?: Omit<
    typeof committeeMeetings.$inferSelect,
    'meetingNumber' | 'committeeType'
  >;
  text: Translations['Committee'];
}) {
  const { toast } = useToast();
  const router = useRouter();
  const meetingSchema = z
    .object({
      place: z.string().min(1, {
        message: `${text.meetings.place} ${text.errors.required}`,
      }),
      agendaUrl: z.string().url({
        message: `${text.errors.invalid} ${text.meetings.agenda} ${text.edit.url}`,
      }),
      minutesUrl: z.string().url({
        message: `${text.errors.invalid} ${text.meetings.minutes} ${text.edit.url}`,
      }),
      createdDate: z
        .string()
        .min(1, { message: `${text.meetings.date} ${text.errors.required}` })
        .refine(
          (value) => {
            const date = new Date(value);
            return !isNaN(date.getTime());
          },
          {
            message: `${text.errors.invalid} ${text.meetings.date}`,
          }
        ),
      createdTime: z
        .string()
        .regex(new RegExp(/^([0-1][0-9]|2[0-3]):[0-5][0-9]/), {
          message: `${text.errors.invalid} ${text.edit.time}`,
        }),
    })
    .transform((data) => {
      const { createdDate, createdTime, ...rest } = data;
      const [hours, minutes] = createdTime.split(':').map(Number);
      const createdAt = new Date(createdDate);
      createdAt.setHours(hours, minutes);

      return {
        ...rest,
        createdAt,
      };
    });
  type meetingOutput = z.infer<typeof meetingSchema>;
  type meetingInput = Omit<meetingOutput, 'createdAt'> & {
    createdDate: string;
    createdTime: string;
  };
  const form = useForm<meetingInput, meetingInput, meetingOutput>({
    resolver: zodResolver(meetingSchema),
    defaultValues: {
      place: existingData?.place,
      agendaUrl: existingData?.agendaUrl,
      minutesUrl: existingData?.minutesUrl,
      createdDate:
        existingData &&
        `${existingData.createdAt.getFullYear()}-${(existingData.createdAt.getMonth() + 1).toString().padStart(2, '0')}-${existingData.createdAt.getDate().toString().padStart(2, '0')}`,
      createdTime: `${existingData?.createdAt.getHours().toString().padStart(2, '0')}:${existingData?.createdAt.getMinutes().toString().padStart(2, '0')}`,
    },
  });

  const addOrEditMeeting = async (data: meetingOutput) => {
    const result = await addEditMeeting(
      data.place,
      data.agendaUrl,
      data.minutesUrl,
      data.createdAt,
      meetingType,
      number
    );
    toast({
      title: result.status === 'success' ? text.edit.success : text.edit.error,
      variant: result.status,
    });
    router.back();
  };

  return (
    <>
      <h3>
        {number ? text.edit.edit : text.edit.add}
        {` ${meetingType.charAt(0).toUpperCase() + meetingType.slice(1)} ${number ? text.meetings.serial + number : text.edit.meeting}`}
      </h3>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(addOrEditMeeting)}>
          <FormField
            control={form.control}
            name="place"
            render={({ field }) => (
              <FormItem reserveSpaceForError>
                <Input
                  id={field.name}
                  label={`${text.meetings.place}`}
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="agendaUrl"
            render={({ field }) => (
              <FormItem reserveSpaceForError>
                <Input
                  id={field.name}
                  label={`${text.meetings.agenda} ${text.edit.url}`}
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="minutesUrl"
            render={({ field }) => (
              <FormItem reserveSpaceForError>
                <Input
                  id={field.name}
                  label={`${text.meetings.minutes} ${text.edit.url}`}
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <span className="flex gap-2">
            <FormField
              control={form.control}
              name="createdDate"
              render={({ field }) => (
                <FormItem reserveSpaceForError>
                  <Input
                    id={field.name}
                    label={`${text.meetings.date}`}
                    type="date"
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="createdTime"
              render={({ field }) => (
                <FormItem reserveSpaceForError>
                  <Input
                    id={field.name}
                    label={`${text.edit.time}`}
                    type="time"
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </span>

          <Button className="mr-2 p-2" type="submit" variant={'primary'}>
            {text.edit.submit}
          </Button>
          <Button
            type="button"
            className="p-2"
            onClick={() => router.back()}
            variant={'secondary'}
          >
            {text.edit.back}
          </Button>
        </form>
      </FormProvider>
    </>
  );
}
