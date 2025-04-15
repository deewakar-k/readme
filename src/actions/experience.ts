"use server";

import { headers } from "next/headers";

import { eq, sql } from "drizzle-orm";

import { db } from "@/db";
import { work_experience } from "@/db/schema";
import { auth } from "@/lib/auth";
import { Experience } from "@/types";

export async function getExperience() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("unauthorized");
  }

  try {
    const userId = session.user.id;
    const result = await db
      .select()
      .from(work_experience)
      .where(eq(work_experience.userId, userId));

    return result;
  } catch (error) {
    console.error("error fetching experience: ", error);
  }
}

export async function createExperience(data: Experience) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("unauthorized");
  }

  try {
    const userId = session.user.id;

    const result = await db
      .insert(work_experience)
      .values({
        id: sql`gen_random_uuid()`,
        userId,
        createdAt: new Date(),
        updatedAt: new Date(),
        ...data,
      })
      .returning();

    if (!result[0]) {
      throw new Error("failed to create experience");
    }

    return result[0];
  } catch (error) {
    console.error("error creating experience: ", error);
  }
}
