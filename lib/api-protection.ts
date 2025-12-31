import { type NextRequest, NextResponse } from 'next/server';

const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

interface RateLimitConfig {
  windowMs?: number;
  maxRequests?: number;
}

export function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'
  );
}

export function withRateLimit<T>(
  handler: (request: NextRequest) => Promise<NextResponse<T>>,
  config: RateLimitConfig = {}
) {
  const { windowMs = 60_000, maxRequests = 30 } = config;

  return async (request: NextRequest): Promise<NextResponse> => {
    const ip = getClientIp(request);
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record || now - record.timestamp > windowMs) {
      rateLimitMap.set(ip, { count: 1, timestamp: now });
    } else if (record.count >= maxRequests) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429, headers: { 'Retry-After': String(windowMs / 1000) } }
      );
    } else {
      record.count++;
    }

    return handler(request);
  };
}
