import {
  getServerSession,
  type DefaultSession,
  type DefaultUser,
  type NextAuthOptions,
} from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { db, persons, roles } from '~/server/db';

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  throw new Error(
    'GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET must be defined in your environment.'
  );
}

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
      sex: (typeof persons.sex.enumValues)[number];
      dateOfBirth: Date | null;
      role: { permissions: (typeof roles.permissions.enumValues)[number][] };
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
          id: true,
          createdOn: true,
          dateOfBirth: true,
          email: true,
          name: true,
          sex: true,
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
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
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
