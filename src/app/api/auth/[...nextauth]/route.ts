import { db } from "@/app/lib/db";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "next-auth";

if (!process.env.NEXTAUTH_SECRET) {
  throw new Error('NEXTAUTH_SECRET is not set in environment variables');
}

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Şifre", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error('Email ve şifre gerekli');
          }

          const user = await db.users.findByEmail(credentials.email);
          if (!user) {
            throw new Error('Kullanıcı bulunamadı');
          }

          const isValid = user.password === credentials.password;
          if (!isValid) {
            throw new Error('Geçersiz şifre');
          }

          const { password, ...userWithoutPass } = user;
          return userWithoutPass as User;
        } catch (error) {
          console.error('Giriş hatası:', error);
          throw error;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };