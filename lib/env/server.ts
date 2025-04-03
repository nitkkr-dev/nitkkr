import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';
import { loadEnvConfig } from '@next/env';

const projectDir = process.cwd();
loadEnvConfig(projectDir);

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(['development', 'production', 'test'])
      .default('development'),

    POSTGRES_URL: z.string().url(),

    NEXTAUTH_URL: z.string().url(),
    NEXTAUTH_SECRET: z.string(),
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),

    AWS_ACCESS_KEY_ID: z.string(),
    AWS_ACCESS_KEY_SECRET: z.string(),
    AWS_S3_REGION: z.string(),
    AWS_PUBLIC_S3_NAME: z.string(),
    AWS_PRIVATE_S3_NAME: z.string(),

    TYPESENSE_HOST: z.string(),
    TYPESENSE_PORT: z.coerce.number(),
    TYPESENSE_API_KEY: z.string(),
  },
  experimental__runtimeEnv: process.env,

  emptyStringAsUndefined: true,
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
