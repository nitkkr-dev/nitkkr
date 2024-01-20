import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  callbacks: {
    async signIn({ profile }: any) {
      // TODO: Override default error message if returning false
      const isAllowedToSignIn = profile.hd == 'nitkkr.ac.in';
      return isAllowedToSignIn;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      profile(profile) {
        return {
          id: profile.email,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
  ],
};
