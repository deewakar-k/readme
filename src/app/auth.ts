import { db } from "@/db";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, GitHub],
  adapter: DrizzleAdapter(db),
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id;
      session.user.username = user.username ?? null;
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
});
