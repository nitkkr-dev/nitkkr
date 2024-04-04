import { Client } from 'typesense';

const createTypesenseClient = () =>
  new Client({
    nodes: [
      {
        host: process.env.TYPESENSE_HOST!,
        port: Number(process.env.TYPESENSE_PORT),
        ...(process.env.NODE_ENV === 'production'
          ? { protocol: 'https' }
          : { protocol: 'http' }),
      },
    ],
    apiKey: process.env.TYPESENSE_API_KEY!,
    connectionTimeoutSeconds: 2,
  });

const globalForTypesense = globalThis as unknown as {
  typesense?: ReturnType<typeof createTypesenseClient>;
};

export const client = globalForTypesense.typesense ?? createTypesenseClient();

if (process.env.NODE_ENV !== 'production')
  globalForTypesense.typesense = client;
