import { client, schema } from '.';

export async function createCollectionsFromSchema() {
  await Promise.all(
    schema.map(async (schemaItem) => {
      const generatedSchema = await client.collections().create(schemaItem);
      console.debug(generatedSchema);
    })
  );
}
