import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { eq } from "drizzle-orm";

import { db } from "@/db";
import { user } from "@/db/schema";
import { auth } from "@/lib/auth";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("unauthorized");
  }

  try {
    const userId = session.user.id;
    const username = session.user.email.split("@")[0];

    const existingUser = await db.query.user.findFirst({
      where: (user, { eq }) => eq(user.id, userId),
    });

    if (!existingUser?.username) {
      await db
        .update(user)
        .set({ username: username })
        .where(eq(user.id, userId));
    }

    return redirect(`/readme/${username}`);
  } catch (error) {
    if (error instanceof Error && error.message === "NEXT_REDIRECT") {
      throw error;
    }
    console.error("error adding username", error);
    return <div>Something went wrong. Please try again.</div>;
  }
}
