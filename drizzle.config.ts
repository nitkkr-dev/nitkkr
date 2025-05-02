import { defineConfig } from 'drizzle-kit';

import { env } from '~/lib/env/server';

export default defineConfig({
  schema: './server/db/schema/**/*.schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.POSTGRES_URL,
  },
  casing: 'snake_case',
  verbose: true,
  strict: true,
});
