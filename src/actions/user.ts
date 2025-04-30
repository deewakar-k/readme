"use server";

import { headers } from "next/headers";

import { eq } from "drizzle-orm";

import { db } from "@/db";
import { user } from "@/db/schema";
import { auth } from "@/lib/auth";
import { User } from "@/types";

export const getUser = async (userId: string) => {
  try {
    const userProfile = await db.query.user.findFirst({
      where: eq(user?.id, userId),
    });

    if (!userProfile) {
      console.error("user not found");
    }

    return userProfile;
  } catch (error) {
    console.error("error fetching user data: ", error);
  }
};

export const updateUser = async (data: Partial<User>) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("not authenticated");
  }

  try {
    const userId = session.user.id;
    const result = await db
      .update(user)
      .set({
        ...data,
        updatedAt: new Date(),
      })
      .where(eq(user.id, userId))
      .returning();

    if (!result[0]) {
      throw new Error("failed to update user");
    }

    return result[0];
  } catch (error) {
    console.error("error updating user data: ", error);
  }
};
