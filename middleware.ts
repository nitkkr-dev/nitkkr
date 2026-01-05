import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { type NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'hi'];

// In-memory rate limiting (resets on cold start)
const rateLimit = new Map<string, { count: number; timestamp: number }>();
const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PAGE = 60; // Pages: 60 requests per minute
const MAX_REQUESTS_API = 30; // API: 30 requests per minute (stricter)

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'
  );
}

function checkRateLimit(
  key: string,
  maxRequests: number
): { limited: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimit.get(key);

  if (!record || now - record.timestamp > WINDOW_MS) {
    rateLimit.set(key, { count: 1, timestamp: now });
    return { limited: false, remaining: maxRequests - 1 };
  }

  if (record.count >= maxRequests) {
    return { limited: true, remaining: 0 };
  }

  record.count++;
  return { limited: false, remaining: maxRequests - record.count };
}

// Suspicious bot patterns (allow legitimate crawlers)
const suspiciousPatterns = [
  /bot(?!.*googlebot|.*bingbot|.*yandexbot|.*duckduckbot|.*slurp|.*facebookexternalhit|.*linkedinbot|.*twitterbot)/i,
  /crawler(?!.*googlebot)/i,
  /spider/i,
  /scraper/i,
  /curl/i,
  /wget/i,
  /python-requests/i,
  /python-urllib/i,
  /node-fetch/i,
  /axios/i,
  /^$/,
];

function isSuspiciousUserAgent(userAgent: string): boolean {
  return suspiciousPatterns.some((pattern) => pattern.test(userAgent));
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
  const { pathname } = request.nextUrl;
  const ip = getClientIp(request);
  const isApiRoute = pathname.startsWith('/api');

  // --- API ROUTES: Stricter protection ---
  if (isApiRoute) {
    const { limited, remaining } = checkRateLimit(
      `api:${ip}`,
      MAX_REQUESTS_API
    );

    if (limited) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: {
            'Retry-After': '60',
            'X-RateLimit-Limit': String(MAX_REQUESTS_API),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': String(Math.ceil(Date.now() / 1000) + 60),
          },
        }
      );
    }

    // Block suspicious user agents on API routes
    const userAgent = request.headers.get('user-agent') ?? '';
    if (isSuspiciousUserAgent(userAgent)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // API routes don't need locale handling
    const response = NextResponse.next();
    response.headers.set('X-RateLimit-Limit', String(MAX_REQUESTS_API));
    response.headers.set('X-RateLimit-Remaining', String(remaining));
    return response;
  }

  // --- PAGE ROUTES: Standard protection ---
  const { limited } = checkRateLimit(`page:${ip}`, MAX_REQUESTS_PAGE);

  if (limited) {
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
  if (isSuspiciousUserAgent(userAgent)) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  // Locale handling
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
    // API routes - rate limiting and bot protection
    '/api/:path*',
    // Page routes - rate limiting, bot protection, and locale redirect
    {
      source: '/((?!_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
