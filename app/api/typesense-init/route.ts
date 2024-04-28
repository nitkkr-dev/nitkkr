import { createCollectionsFromSchema } from '~/server/typesense/init';
import { populateTypesense } from '~/server/typesense/data_init';

export async function GET() {
  try {
    console.log('Creating collections from schema and populating Typesense');
    await createCollectionsFromSchema();
    console.log('Collections created successfully. Populating data...');
    await populateTypesense();
    console.log('Data populated successfully. Check the console for progress.');
    return Response.json(
      'Files succesfully imported into Typesense. Check the console for progress.'
    );
  } catch (error) {
    console.error('An error occurred:', error);
    return new Response('Error occurred', { status: 500 });
  }
}
