import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { type NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'hi'];

// In-memory rate limiting (resets on cold start)
const rateLimit = new Map<string, { count: number; timestamp: number }>();
const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 60;

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimit.get(ip);

  if (!record || now - record.timestamp > WINDOW_MS) {
    rateLimit.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (record.count >= MAX_REQUESTS) {
    return true;
  }

  record.count++;
  return false;
}

function getPreferredLocale(request: NextRequest): string {
  const defaultLocale = 'en';
  const languages = new Negotiator({
    headers: {
      'accept-language': request.headers.get('Accept-Language') ?? '',
    },
  }).languages();

  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const ip = getClientIp(request);

  // Rate limiting check
  if (isRateLimited(ip)) {
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        'Retry-After': '60',
        'Content-Type': 'text/plain',
      },
    });
  }

  // Block suspicious user agents
  const userAgent = request.headers.get('user-agent') ?? '';
  const suspiciousPatterns = [
    /bot(?!.*googlebot|.*bingbot)/i,
    /crawler/i,
    /spider/i,
    /scraper/i,
    /^$/,
  ];

  if (suspiciousPatterns.some((pattern) => pattern.test(userAgent))) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const preferredLocale = getPreferredLocale(request);
  request.nextUrl.pathname = `/${preferredLocale}${pathname}`;

  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
