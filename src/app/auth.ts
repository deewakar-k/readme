import { db } from "@/db";
import { users } from "@/db/schema";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { eq } from "drizzle-orm";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, GitHub],
  adapter: DrizzleAdapter(db),
  callbacks: {
    async session({ session, token, user }) {
      if (session.user) {
        session.user.id = token.sub || user?.id;

        const dbUser = await db.query.users.findFirst({
          where: eq(users.id, session.user.id),
          columns: {
            username: true,
          },
        });

        if (dbUser) {
          session.user.username = dbUser.username;
        }
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
});
