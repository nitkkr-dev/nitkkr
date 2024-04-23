import { client, schema } from '.';

// schema.forEach(async (schema) => {
//   const generatedSchema = await client.collections().create(schema);
//   console.debug(generatedSchema);
// });

export async function createCollectionsFromSchema() {
  await Promise.all(
    schema.map(async (schemaItem) => {
      const generatedSchema = await client.collections().create(schemaItem);
      console.debug(generatedSchema);
    })
  );
}
