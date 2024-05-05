import { getKeys } from '~/lib/utils';

import { schema, typesense } from '.';

export async function createCollections() {
  await Promise.all(
    getKeys(schema).map(
      async (schemaItem) =>
        await typesense.collections().create(schema[schemaItem])
    )
  );
}
