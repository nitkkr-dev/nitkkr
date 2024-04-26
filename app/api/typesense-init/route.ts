import { createCollectionsFromSchema } from '~/server/typesense/init';
import { populateTypesense } from '~/server/typesense/data_init';

export async function GET() {
  try {
    await createCollectionsFromSchema();
    await populateTypesense();
    return Response.json(
      'Files succesfully imported into Typesense. Check the console for progress.'
    );
  } catch (error) {
    console.error('An error occurred:', error);
    return new Response('Error occurred', { status: 500 });
  }
}
