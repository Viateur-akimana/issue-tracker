import type { NextAuthOptions } from "next-auth";
// import GitHubProvider from 'next-auth/providers/github';
import Credentials from "next-auth/providers/credentials";
// import GoogleProvider from 'next-auth/providers/google';
import prisma from "@/prisma/client";
import { compare } from "bcrypt";


export const options: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: '/login'
  },
  providers: [
    // GoogleProvider({
    //     clientId: process.env.GOOGLE_CLIENT_ID as string,
    //     clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    // }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
        },
        password: {
        }
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password are required');
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });

        if (!user) {
          throw new Error('User not found');
        }
        const isPasswordMatch = await compare(credentials.email, user.email);
        if (isPasswordMatch) {
          throw new Error('Invalid credentials');
        }

        return user;

      }
    })
  ],


}