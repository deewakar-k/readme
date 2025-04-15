"use server";

import { headers } from "next/headers";

import { eq, sql } from "drizzle-orm";

import { db } from "@/db";
import { projects } from "@/db/schema";
import { auth } from "@/lib/auth";
import { Project } from "@/types";

export async function getProjects() {
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
      .from(projects)
      .where(eq(projects.userId, userId));

    return result;
  } catch (error) {
    console.error("error fetching projects: ", error);
  }
}

export async function createProject(data: Project) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("unauthorized");
  }

  try {
    const userId = session.user.id;
    const result = await db
      .insert(projects)
      .values({
        id: sql`gen_random_uuid()`,
        userId,
        createdAt: new Date(),
        updatedAt: new Date(),
        ...data,
      })
      .returning();

    if (!result[0]) {
      throw new Error("error creating project");
    }

    return result[0];
  } catch (error) {
    console.error("error creating project: ", error);
  }
}
