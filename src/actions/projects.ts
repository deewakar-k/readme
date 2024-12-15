"use server";

import { auth } from "@/app/auth";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { Project } from "@/types/project";
import { eq } from "drizzle-orm";

export async function getProjects() {
  try {
    const session = await auth();

    if (!session?.user.id) {
      console.error("user_id not found");
      return null;
    }

    const allProjects = await db
      .select()
      .from(projects)
      .where(eq(projects.user_id, session.user.id));

    return allProjects;
  } catch (error) {
    console.error("error getting projects", error);
  }
}

export async function createProject(data: Project) {
  try {
    const session = await auth();

    if (!session?.user.id) {
      console.error("user_id not found or not authenticated");
      return null;
    }

    return await db.insert(projects).values({
      ...data,
      user_id: session.user.id,
    });
  } catch (error) {
    console.error("error creating project", error);
  }
}
