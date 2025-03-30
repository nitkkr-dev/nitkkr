import { Client } from 'typesense';

import { env } from '~/lib/env/server';

const createTypesenseClient = () => {
  console.log('production is', env.NODE_ENV);
  return new Client({
    nodes: [
      {
        host: env.TYPESENSE_HOES,
        port: env.TYPESENSE_POR,
        ...(env.NODE_ENV === 'production'
          ? { protocol: 'http' }
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
