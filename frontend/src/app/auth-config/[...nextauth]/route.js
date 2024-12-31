import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { API_CONFIG } from '@/api/api'

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
          const response = await fetch(`${API_CONFIG.baseURL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: credentials.email,
              senha: credentials.senha
            })
          })
          const data = await response.json()
          
          if (data.access_token) {
            return {
              id: data.user.id,
              name: data.user.nome,
              email: data.user.email,
              accessToken: data.access_token
            }
          }
          return null
        } catch (error) {
          console.log('Auth Error:', error)
          return null
        }
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60
  },
  pages: {
    signIn: '/login',
    error: '/login'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.accessToken = user.accessToken
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token.id
      session.accessToken = token.accessToken
      return session
    }
  },
  debug: process.env.NODE_ENV === 'development'
})

export { handler as GET, handler as POST }
