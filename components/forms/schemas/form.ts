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
    onSubmitMessage: z.string().default('Your response has been recorded.'),
    isEditingAllowed: z.boolean(),
    isSingleResponse: z.boolean().default(false),
    isViewAnalyticsAllowed: z.boolean().default(false),
    isShuffled: z.boolean().default(false),
    isCopySent: z.boolean().default(false),
    expiryDate: z
      .date()
      .min(new Date(), { message: "form cannot expire before it's creation." })
      .optional(),
    isAnonymous: z.boolean().default(false),
  })
  .refine((data) => !data.isEditingAllowed || data.isSingleResponse, {
    message: 'Cannot edit a multiple response form.',
    path: ['isEditingAllowed'],
  })
  .refine(
    (data) =>
      !data.isAnonymous || (!data.isEditingAllowed && !data.isSingleResponse),
    {
      message: 'Cannot be anonymous and stop multiple or make an edit.',
      path: ['isAnonymous'],
    }
  );
