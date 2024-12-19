"use server";

import { auth } from "@/app/auth";
import { db } from "@/db";
import { experiences } from "@/db/schema";
import { ExperienceInput } from "@/types/experience";
import { eq } from "drizzle-orm";

export async function getExperiences() {
  try {
    const session = await auth();

    if (!session?.user.id) {
      console.error("user_id not found");
      return null;
    }

    const result = await db
      .select()
      .from(experiences)
      .where(eq(experiences.user_id, session.user.id));

    return { result };
  } catch (error) {
    console.error({ error });
  }
}

export async function addExperience(data: ExperienceInput) {
  try {
    const session = await auth();

    if (!session?.user.id) {
      console.error("user_id not found");
      return null;
    }

    return await db.insert(experiences).values({
      ...data,
      user_id: session.user.id,
    });
  } catch (error) {
    console.error("error adding experience: ", error);
  }
}
