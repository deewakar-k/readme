"use server";

import { headers } from "next/headers";

import { and, eq, sql } from "drizzle-orm";

import { db } from "@/db";
import { work_experience } from "@/db/schema";
import { auth } from "@/lib/auth";
import { Experience } from "@/types";

export async function getExperience(userId: string) {
  try {
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

export async function updateExperience(
  data: Partial<Experience>,
  experienceId: string
) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("unauthorized");
  }

  try {
    const userId = session.user.id;

    const existingExperience = await db
      .select()
      .from(work_experience)
      .where(
        and(
          eq(work_experience.id, experienceId),
          eq(work_experience.userId, userId)
        )
      )
      .limit(1);

    if (existingExperience.length === 0) {
      throw new Error("Experience not found or unauthorized");
    }

    const result = await db
      .update(work_experience)
      .set({
        ...data,
        updatedAt: new Date(),
      })
      .where(eq(work_experience.id, experienceId))
      .returning();

    if (!result[0]) {
      throw new Error("failed to updated project");
    }

    return result[0];
  } catch (error) {
    console.error("error updating project: ", error);
  }
}

export async function deleteExperience(experienceId: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("unauthorized");
  }

  try {
    const userId = session.user.id;

    const existingExperience = await db
      .select()
      .from(work_experience)
      .where(
        and(
          eq(work_experience.id, experienceId),
          eq(work_experience.userId, userId)
        )
      )
      .limit(1);

    if (existingExperience.length === 0) {
      throw new Error("Experience not found or unauthorized");
    }

    await db
      .delete(work_experience)
      .where(eq(work_experience.id, experienceId));

    return true;
  } catch (error) {
    console.error("error deleting experience", error);
  }
}
