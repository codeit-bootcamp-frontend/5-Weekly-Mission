import { postSignIn } from "@/service/api";
import NextAuth, { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        id: { label: "id", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const { id, password } = credentials;
        const response = await postSignIn(id, password);
        return response.data;
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/login",
  },

  session: {
    maxAge: 60 * 60,
  },

  callbacks: {
    async jwt({ token, user }: { token: JWT; user: User }) {
      const copyToken = { ...token };
      if (user) {
        copyToken.accessToken = user?.accessToken;
      }
      return copyToken;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      const copySession = { ...session };
      copySession.accessToken = token.accessToken;
      return copySession;
    },
  },
};

export default NextAuth(authOption);
