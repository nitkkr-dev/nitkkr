import { Client } from 'typesense';

import { env } from '~/lib/env/server';

const createTypesenseClient = () => {
  console.log('production is', env.NODE_ENV);
  return new Client({
    nodes: [
      {
        host: env.TYPESENSE_HOST,
        port: env.TYPESENSE_PORT,
        ...(env.NODE_ENV === 'production'
          ? { protocol: 'http' } // ssl certs required for https
          : { protocol: 'http' }),
      },
    ],
    apiKey: env.TYPESENSE_API_KEY,
    connectionTimeoutSeconds: 2,
  });
};
const globalForTypesense = globalThis as unknown as {
  typesense: ReturnType<typeof createTypesenseClient>;
};

export const typesense =
  globalForTypesense.typesense ?? createTypesenseClient();

if (env.NODE_ENV !== 'production') globalForTypesense.typesense = typesense;
