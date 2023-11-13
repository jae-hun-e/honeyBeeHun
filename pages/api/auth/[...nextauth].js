import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { connectDB } from "@/app/_services/datebaseConnect";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.NEXTAUTH_GITHUB_CLIENTID,
      clientSecret: process.env.NEXTAUTH_GITHUB_CLIENTSECRET,
    }),
  ],
};
export default NextAuth(authOptions);
