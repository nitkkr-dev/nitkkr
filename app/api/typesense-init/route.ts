import { selectAll } from '~/server/typesense/db_data';
import { createCollectionsFromSchema } from '~/server/typesense/init';
import { addAllData } from '~/server/typesense/data_init';

export async function GET(request: Request) {
  const results = await selectAll();

  // init schemas
  const schemaRes = await createCollectionsFromSchema();
  console.log(schemaRes);

  // upsert all the data
  const res = await addAllData();
  console.log(res);

  return Response.json('OK');
}
