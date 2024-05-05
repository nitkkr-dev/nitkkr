import { search } from '~/server/typesense';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  if (!query) return Response.json([]);

  return Response.json(await search(query));
}
