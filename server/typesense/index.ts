import { Client } from 'typesense';

import { env } from '~/lib/env';

const createTypesenseClient = () =>
  new Client({
    nodes: [
      {
        host: env.TYPESENSE_HOST,
        port: env.TYPESENSE_PORT,
        ...(env.NODE_ENV === 'production'
          ? { protocol: 'https' }
          : { protocol: 'http' }),
      },
    ],
    apiKey: process.env.TYPESENSE_API_KEY!,
    connectionTimeoutSeconds: 2,
  });

const globalForTypesense = globalThis as unknown as {
  typesense: ReturnType<typeof createTypesenseClient>;
};

export const typesense =
  globalForTypesense.typesense ?? createTypesenseClient();

if (env.NODE_ENV !== 'production') globalForTypesense.typesense = typesense;

export * as schema from './schema';
