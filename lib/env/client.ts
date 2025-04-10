import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  client: {
    NEXT_PUBLIC_AWS_S3_URL: z.string().url(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_AWS_S3_URL: process.env.NEXT_PUBLIC_AWS_S3_URL,
  },

  emptyStringAsUndefined: true,
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
