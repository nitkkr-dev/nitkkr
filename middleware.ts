import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { getServerSession } from 'next-auth';

import { authOptions } from './app/api/auth/auth';
import { NextRequest, NextResponse } from './node_modules/next/server';
import prisma from './prisma/prismClinet';

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

async function authCheck() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return false;
  } else return true;
}

async function roleCheck(requiredPermission: string[]) {
  const session = await getServerSession(authOptions);
  const user = session!.user!;
  let hasRequiredRoles = false; // Initialize to false

  if (user) {
    const person = await prisma.persons.findFirst({
      where: {
        institute_email: user.email!,
      },
    });

    const permissions = await prisma.auth_roles.findMany({
      where: {
        id: {
          in: person?.role_ids || [],
        },
      },
    });

    const combinedPermissions = permissions.reduce((acc, curr) => {
      return [...acc, ...curr.permissions];
    }, [] as string[]);

    hasRequiredRoles = requiredPermission.every((permission) =>
      combinedPermissions.includes(permission)
    );

    return hasRequiredRoles;
  }
}
export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/')) {
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = locales.some(
      (locale) =>
        pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    const preferredLocale = getPreferredLocale(request);
    request.nextUrl.pathname = `/${preferredLocale}${pathname}`;

    return Response.redirect(request.nextUrl);
  }

  if (request.nextUrl.pathname.includes('/student-profile')) {
    const auth = await authCheck();
    if (!auth) {
      NextResponse.redirect('/login');
    }
    const requiredRoles = ['student'];
    const hasRequiredRoles = await roleCheck(requiredRoles);
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
  runtime: 'experimental-edge', // for Edge API Routes only
  unstable_allowDynamic: [
    '/lib/utilities.js', // allows a single file
    '/node_modules/function-bind/**', // use a glob to allow anything in the function-bind 3rd party module
  ],
};
