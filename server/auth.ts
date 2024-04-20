import NextAuth, { type DefaultSession, type User } from 'next-auth';
import Google from 'next-auth/providers/google';

import { db, roles } from '~/server/db';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    person: {
      id: number;
      name: string;
      role: {
        permissions: (typeof roles.permissions.enumValues)[number][];
      } | null;
      type: 'faculty' | 'staff' | 'student';
    };
    user: User;
  }
}

export const {
  auth: getSession,
  handlers,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async session({ session }) {
      session.person = (await db.query.persons.findFirst({
        columns: { id: true, name: true, type: true },
        where: ({ email }, { eq }) => eq(email, session.user.email),
        with: { role: { columns: { permissions: true } } },
      }))!;
      return session;
    },
    async signIn({ user: { email } }) {
      if (!email) return false;

      return Boolean(
        await db.query.persons.findFirst({
          columns: { id: true },
          where: (person, { eq }) => eq(person.email, email),
        })
      );
    },
  },
  // FIXME: Sign out and Error pages
  pages: { signIn: '/login' },
  providers: [Google],
});
