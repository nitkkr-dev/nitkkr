import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';

import authConfig from '@/auth.config';

import { prismadb } from './prisma/prisma-client';
export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  adapter: PrismaAdapter(prismadb),
  session: { strategy: 'jwt' },
  ...authConfig,
});
