import { sql } from '@vercel/postgres';
import { Pool } from 'pg';
import { drizzle as vercelDrizzle } from 'drizzle-orm/vercel-postgres';
import { drizzle as nodeDrizzle } from 'drizzle-orm/node-postgres';

import { env } from '~/lib/env/server';

import * as schema from './schema';

// --- POSTGRESQL SETUP ---
// For local: postgres we need 'pg' and 'drizzle-orm/node-postgres'
// If we use Neon we need '@vercel/postgres' and 'drizzle-orm/vercel-postgres'

// Use the Vercel driver's return type as the canonical DB type.
// Both drivers produce a PgDatabase that is structurally compatible when
// given the same schema, so the cast below is safe.
type DbInstance = ReturnType<typeof vercelDrizzle<typeof schema>>;

function createConnection(): DbInstance {
  if (env.VERCEL) {
    return vercelDrizzle({ casing: 'snake_case', client: sql, schema });
  }

  const pool = new Pool({ connectionString: env.POSTGRES_URL });
  return nodeDrizzle(pool, {
    casing: 'snake_case',
    schema,
  }) as unknown as DbInstance;
}

const globalForDrizzle = globalThis as unknown as {
  db: DbInstance | undefined;
};

export const db: DbInstance = globalForDrizzle.db ?? createConnection();

if (env.NODE_ENV !== 'production') globalForDrizzle.db = db;

export * from './schema';
