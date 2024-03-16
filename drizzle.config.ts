import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './server/db/*.ts',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
});
