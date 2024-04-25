import { defineConfig } from 'drizzle-kit';

import { env } from '~/lib/env';

export default defineConfig({
  schema: './server/schema/**/*.schema.ts',
  driver: 'pg',
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
  verbose: true,
  strict: true,
});
