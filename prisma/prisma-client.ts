import { PrismaClient } from '@/prisma/generated/client';

declare global {
  var prisma: PrismaClient | undefined;
}

export const prismadb = globalThis.prisma || new PrismaClient(); //shenanigans for next.js hot reload

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prismadb;
