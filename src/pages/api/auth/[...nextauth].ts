import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google';

type ClientType = {
  clientId: string;
  clientSecret: string;
}

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    } as ClientType),
  ],
}

export default NextAuth(authOptions);
