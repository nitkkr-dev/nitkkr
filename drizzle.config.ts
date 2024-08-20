import { defineConfig } from 'drizzle-kit';

import { env } from '~/lib/env';

export default defineConfig({
  schema: './server/db/schema/**/*.schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://$default:1tpVmZYrd0FG@ep-soft-limit-a1lqwhsh-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require",
  },
  verbose: true,
  strict: true,
});

// postgresql://$default:1tpVmZYrd0FG@ep-soft-limit-a1lqwhsh-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require