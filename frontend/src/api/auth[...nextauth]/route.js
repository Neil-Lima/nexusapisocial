import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getApiUrl } from '@/api/api';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        senha: { label: "Senha", type: "password" }
      },
      async authorize(credentials) {
        try {
          const response = await fetch(getApiUrl('/auth/login'), {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
          });
          
          const data = await response.json();
          
          if (response.ok && data) {
            return data;
          }
          return null;
        } catch (error) {
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    }
  }
});

export { handler as GET, handler as POST };
