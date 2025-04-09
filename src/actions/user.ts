"use server";

import { headers } from "next/headers";

import { eq } from "drizzle-orm";

import { db } from "@/db";
import { user } from "@/db/schema";
import { auth } from "@/lib/auth";

export const getUser = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("not authenticated");
  }

  try {
    const userId = session.user.id;
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
