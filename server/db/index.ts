import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';

import { env } from '~/lib/env/server';

import * as schema from './schema';

const createDrizzleConnection = () =>
  drizzle({ casing: 'snake_case', client: sql, schema });

const globalForDrizzle = globalThis as unknown as {
  drizzle: ReturnType<typeof createDrizzleConnection> | undefined;
};

export const db = globalForDrizzle.drizzle ?? createDrizzleConnection();

if (env.NODE_ENV !== 'production') globalForDrizzle.drizzle = db;

export * from './schema';
