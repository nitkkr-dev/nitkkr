import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
  type User,
} from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { env } from '~/lib/env';
import { db, roles } from '~/server/db';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: User & {
      personId: number;
      name: string;
      email: string;
      type: 'faculty' | 'staff' | 'student';
      role: {
        permissions: (typeof roles.permissions.enumValues)[number][];
      } | null;
    };
  }
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    async session({ session }) {
      const { id, name, type, role } = (await db.query.persons.findFirst({
        columns: { id: true, name: true, type: true },
        where: ({ email }, { eq }) => eq(email, session.user.email),
        with: { role: { columns: { permissions: true } } },
      }))!;
      session.user.personId = id;
      session.user.name = name;
      session.user.type = type;
      session.user.role = role;
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
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.email as string,
          email: profile.email as string,
          image: profile.picture as string | null,
        };
      },
    }),
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions);
