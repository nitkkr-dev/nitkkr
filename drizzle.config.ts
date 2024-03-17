import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './server/schema/**/*.schema.ts',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
});
