"use server";

import { auth } from "@/app/auth";
import { db } from "@/db";
import { education } from "@/db/schema";
import { newEducation } from "@/types/education";
import { eq } from "drizzle-orm";

export async function getEducations() {
  try {
    const session = await auth();
    if (!session?.user.id) {
      console.error("not authenticated");
      return null;
    }

    const result = await db
      .select()
      .from(education)
      .where(eq(education.user_id, session.user.id));

    return { result };
  } catch (error) {
    return { error };
  }
}

export async function createEducation(data: newEducation) {
  try {
    const session = await auth();

    if (!session?.user.id) {
      console.error("user_id not found or not authenticated");
      return null;
    }

    return await db.insert(education).values({
      ...data,
      user_id: session.user.id,
    });
  } catch (error) {
    console.error("error creating education: ", error);
  }
}
