"use server";

import { headers } from "next/headers";

import { eq, sql } from "drizzle-orm";

import { db } from "@/db";
import { contacts } from "@/db/schema";
import { auth } from "@/lib/auth";
import { Contact } from "@/types";

export async function getContacts() {
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
      .from(contacts)
      .where(eq(contacts.userId, userId));

    return result;
  } catch (error: any) {
    console.error("error fetching contacts");
  }
}

export async function createContact(data: Contact) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("unauthorized");
  }

  try {
    const userId = session.user.id;
    const result = await db
      .insert(contacts)
      .values({
        id: sql`gen_random_uuid()`,
        userId,
        createdAt: new Date(),
        updatedAt: new Date(),
        ...data,
      })
      .returning();

    if (!result[0]) {
      throw new Error("failed to create contact");
    }

    return result[0];
  } catch (error) {
    console.error("error creating contact: ", error);
  }
}
