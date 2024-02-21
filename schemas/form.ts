import { z } from 'zod';

export const formSchema = z.object({
  title: z.string().min(4),
  description: z.string().optional(),
  isEditable: z.boolean().default(false),
});

export type formSchemaType = z.infer<typeof formSchema>;

export const finalFormSchema = z
  .object({
    title: z.string().min(4),
    description: z.string().optional(),
    on_submit_message: z.string().default('Your response has been recorded.'),
    is_editing_allowed: z.boolean(),
    is_single_response: z.boolean().default(false),
    is_view_analytics_allowed: z.boolean().default(false),
    is_shuffled: z.boolean().default(false),
    is_copy_sent: z.boolean().default(false),
    expiry_date: z.date().optional(),
    is_anonymous: z.boolean().default(false),
  })
  .refine((data) => !data.is_editing_allowed || data.is_single_response, {
    message: 'Cannot edit a multiple response form.',
    path: ['is_editing_allowed'],
  })
  .refine(
    (data) =>
      data.is_anonymous && (data.is_editing_allowed || data.is_single_response),
    {
      message: 'Cannot be anonymous and stop multiple or make an edit.',
      path: ['is_anonymous'],
    }
  );
