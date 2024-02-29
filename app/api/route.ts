export async function GET(request: Request) {
  if (request.method !== 'GET') {
    console.log('No other method required');
  }
  return Response.json({
    message: "Welcome to NIT-KKR's official public API",
  });
}
