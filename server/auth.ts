import {
  getServerSession,
  type DefaultSession,
  type DefaultUser,
  type NextAuthOptions,
} from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { env } from '~/lib/env';
import { db, persons, roles } from '~/server/db';

declare module 'next-auth' {
  // A nicer way to assert that `email` will not be
  // undefined since we only use the Google provider as of now.
  interface User extends DefaultUser {
    email: string;
  }

  interface Session extends DefaultSession {
    person: {
      id: number;
      name: string;
      email: string;
      telephone: string;
      alternateTelephone: string | null;
      sex: (typeof persons.sex.enumValues)[number];
      dateOfBirth: Date | null;
      role: {
        permissions: (typeof roles.permissions.enumValues)[number][];
      } | null;
      type: 'faculty' | 'staff' | 'student';
      createdOn: Date;
    };
    user: User;
  }
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    async session({ session }) {
      session.person = (await db.query.persons.findFirst({
        columns: {
          alternateTelephone: true,
          id: true,
          createdOn: true,
          dateOfBirth: true,
          email: true,
          name: true,
          sex: true,
          telephone: true,
          type: true,
        },
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
