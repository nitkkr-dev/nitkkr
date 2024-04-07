import { populate } from '~/server/db/sample';

export async function GET(_request: Request) {
  try {
    await populate();
  } catch (error) {
    console.error(error);
    return Response.json(error, { status: 500 });
  }

  return Response.json({ message: 'DB populated successfully!' });
}
