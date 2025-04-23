"use server";

import { headers } from "next/headers";

import { and, eq, sql } from "drizzle-orm";

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

export async function updateProject(data: Partial<Project>, projectId: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("unauthorized");
  }

  try {
    const userId = session.user.id;

    const existingProject = await db
      .select()
      .from(projects)
      .where(and(eq(projects.id, projectId), eq(projects.userId, userId)))
      .limit(1);

    if (existingProject.length === 0) {
      throw new Error("Project not found or unauthorized");
    }

    const result = await db
      .update(projects)
      .set({
        ...data,
        updatedAt: new Date(),
      })
      .where(eq(projects.id, projectId))
      .returning();

    if (!result[0]) {
      throw new Error("failed to updated project");
    }

    return result[0];
  } catch (error) {
    console.error("error updating project: ", error);
  }
}

export async function deleteProject(projectId: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("unauthorized");
  }

  try {
    const userId = session.user.id;

    const existingProject = await db
      .select()
      .from(projects)
      .where(and(eq(projects.id, projectId), eq(projects.userId, userId)))
      .limit(1);

    if (existingProject.length === 0) {
      throw new Error("Project not found or unauthorized");
    }

    await db.delete(projects).where(eq(projects.id, projectId));

    return true;
  } catch (error) {
    console.error("error deleting project", error);
  }
}
