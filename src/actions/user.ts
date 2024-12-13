"use server";

import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function checkUsername(username: string) {
  if (!username || username.trim() === "") {
    return false;
  }

  try {
    const user = await db.query.users.findFirst({
      where: eq(users.username, username),
      columns: {
        username: true,
      },
    });

    const exists = user !== undefined && user !== null;

    return exists;
  } catch (error) {
    console.error("Error checking username:", error);
    return false;
  }
}

export async function setUsername(userId: string, username: string) {
  await db.update(users).set({ username }).where(eq(users.id, userId));
}
