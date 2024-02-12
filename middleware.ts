import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import type { NextRequest } from 'next/server';

const locales = ['en', 'hi'];

function getPreferredLocale(request: NextRequest): string {
  const defaultLocale = 'en';
  const languages = new Negotiator({
    headers: {
      'accept-language': request.headers.get('Accept-Language') || '',
    },
  }).languages();

  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
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
    // Skip all internal paths (_next)
    '/((?!_next).*)',
  ],
};
