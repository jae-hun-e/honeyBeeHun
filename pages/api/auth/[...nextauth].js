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

    CredentialsProvider({
      //1. 로그인페이지 폼 자동생성해주는 코드
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        pw: { label: "pw", type: "password" },
      },

      //2. 로그인페이지 폼에서 입력받은 데이터를 처리하는 코드
      async authorize(credentials) {
        let db = (await connectDB).db("blog");
        let user = await db
          .collection("user_cred")
          .findOne({ email: credentials.email });
        if (!user) {
          console.log("해당 이메일은 없음");
          return null;
        }
        const pwCheck = await bcrypt.compare(credentials.pw, user.pw);
        if (!pwCheck) {
          console.log("비번틀림");
          return null;
        }
        return user;
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, //30일
  },

  callbacks: {
    //3. jwt 만들 때 실행되는 코드
    //user변수는 DB의 유저정보담겨있고 token.user에 뭐 저장하면 jwt에 들어갑니다.
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = {};
        token.user.id = user.id;
        token.user.email = user.email;
        token.user.role = user.role;
      }
      return token;
    },
    //4. 유저 세션이 조회될 때 마다 실행되는 코드
    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },

  secret: "jwt",
};
export default NextAuth(authOptions);
