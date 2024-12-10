"use server";

import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function checkUsername(username: string) {
  const user = await db.query.users.findFirst({
    where: eq(users.username, username),
  });

  return user !== null;
}

export async function setUsername(userId: string, username: string) {
  await db.update(users).set({ username }).where(eq(users.id, userId));
}
