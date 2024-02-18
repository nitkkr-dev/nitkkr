import GoogleProvider from 'next-auth/providers/google';
import type { NextAuthConfig } from 'next-auth';

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  throw new Error(
    'GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET must be defined in your environment.'
  );
}

export default {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.email,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
  ],
} satisfies NextAuthConfig;
