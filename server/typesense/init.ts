import { client, schema } from '.';

schema.forEach(async (schema) => {
  const generatedSchema = await client.collections().create(schema);
  console.debug(generatedSchema);
});
