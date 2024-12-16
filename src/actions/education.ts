"use server";

import { auth } from "@/app/auth";
import { db } from "@/db";
import { education } from "@/db/schema";
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
