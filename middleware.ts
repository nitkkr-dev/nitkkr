import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextRequest, NextResponse } from 'next/server';

import { getServerAuthSession } from '~/server/auth';
import { db } from '~/server/db';

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

async function isAuthorised(requiredPermissions: string[]) {
  const session = await getServerAuthSession();
  if (!session) {
    NextResponse.redirect('/login');
    return false;
  }

  const person = await db.persons.findFirst({
    where: { institute_email: session.user.email },
  });

  let permissions = await db.auth_roles.findMany({
    where: { id: { in: person?.role_ids || [] } },
  });

  permissions = permissions.reduce(
    (acc, curr) => [...acc, ...curr.permissions],
    [] as string[]
  );

  return requiredPermissions.every((permission) =>
    permissions.includes(permission)
  );
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    const preferredLocale = getPreferredLocale(request);
    request.nextUrl.pathname = `/${preferredLocale}${pathname}`;

    return Response.redirect(request.nextUrl);
  }

  if (request.nextUrl.pathname.includes('/student-profile')) {
    const requiredRoles = ['student'];
    const hasRequiredRoles = await isAuthorised(requiredRoles);
    if (!hasRequiredRoles) {
      NextResponse.redirect('/login');
    } else return NextResponse.next();
  }

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // This logic is only applied to /dashboard
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
