"use server";

import { db } from "@/db";
import { users } from "@/db/schema";
import { User } from "@/types/user";
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

export async function getUserDetails(username: string) {
  try {
    if (!username) {
      console.error("username is undefined");
      return null;
    }

    const userDetails = await db
      .select()
      .from(users)
      .where(eq(users.username, username))
      .limit(1);

    if (!userDetails) {
      console.error("user doesnt exists");
      return null;
    }

    return userDetails[0];
  } catch (error) {
    console.error("failed to get user details: ", error);
  }
}

export async function setUserDetails(data: Partial<User>, username: string) {
  try {
    return await db.update(users).set(data).where(eq(users.username, username));
  } catch (error) {
    console.error("error updating user details: ", error);
  }
}
