import { type NextRequest, NextResponse } from 'next/server';

import { withRateLimit } from '~/lib/api-protection';

async function handler(_request: NextRequest) {
  return NextResponse.json(
    { message: "Welcome to NIT-KKR's official public API" },
    {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
      },
    }
  );
}

export const GET = withRateLimit(handler, {
  maxRequests: 30,
  windowMs: 60_000,
});
