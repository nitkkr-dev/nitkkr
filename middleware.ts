import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import NextAuth from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

import authConfig from './auth.config';
import prisma from './prisma/prisma-client';
import { NextURL } from 'next/dist/server/web/next-url';

const { auth } = NextAuth(authConfig);
const locales = ['en', 'hi'];

function getPreferredLocale(request: NextRequest): string {
  const defaultLocale = 'en';
  const { nextUrl } = request;
  const languages = new Negotiator({
    headers: {
      'accept-language': request.headers.get('Accept-Language') || '',
    },
  }).languages();

  return match(languages, locales, defaultLocale);
}

async function isAuthorised(requiredPermissions: string[], nextUrl: NextURL) {
  const session = await auth();
  if (!session) {
    NextResponse.redirect(new URL('/login', nextUrl));
    return false;
  }

  const person = await prisma.persons.findFirst({
    where: { institute_email: session.user?.email! },
  });

  let permissionsData = await prisma.auth_roles.findMany({
    where: { id: { in: person?.role_ids || [] } },
  });
  if (!Array.isArray(permissionsData)) {
    permissionsData = [];
  }

  // Flatten and merge the permissions arrays
  const permissions: string[] = permissionsData.reduce(
    (acc: string[], curr: { id: number; permissions: string[] }) => {
      return [...acc, ...curr.permissions];
    },
    []
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
    const hasRequiredRoles = await isAuthorised(requiredRoles, request.nextUrl);
    if (!hasRequiredRoles) {
      Response.redirect(new URL('/login', request.nextUrl));
    } else return NextResponse.next();
  }

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // This logic is only applied to /dashboard
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
  ],
};
