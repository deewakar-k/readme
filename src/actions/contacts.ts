"use server";

import { headers } from "next/headers";

import { and, eq, sql } from "drizzle-orm";

import { db } from "@/db";
import { contacts } from "@/db/schema";
import { auth } from "@/lib/auth";
import { Contact } from "@/types";

export async function getContacts(userId: string) {
  try {
    const result = await db
      .select()
      .from(contacts)
      .where(eq(contacts.userId, userId));

    return result;
  } catch (error) {
    console.error("error fetching contacts: ", error);
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

export async function updateContact(data: Partial<Contact>, contactId: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("unauthorized");
  }

  try {
    const userId = session.user.id;

    const existingContact = await db
      .select()
      .from(contacts)
      .where(and(eq(contacts.id, contactId), eq(contacts.userId, userId)))
      .limit(1);

    if (existingContact.length === 0) {
      throw new Error("contact not found or unauthorized");
    }

    const result = await db
      .update(contacts)
      .set({
        ...data,
        updatedAt: new Date(),
      })
      .where(eq(contacts.id, contactId))
      .returning();

    if (!result[0]) {
      throw new Error("failed to updated contact");
    }

    return result[0];
  } catch (error) {
    console.error("error updating contact: ", error);
  }
}

export async function deleteContact(contactId: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("unauthorized");
  }

  try {
    const userId = session.user.id;

    const existingContact = await db
      .select()
      .from(contacts)
      .where(and(eq(contacts.id, contactId), eq(contacts.userId, userId)))
      .limit(1);

    if (existingContact.length === 0) {
      throw new Error("Contact not found or unauthorized");
    }
    await db.delete(contacts).where(eq(contacts.id, contactId));

    return true;
  } catch (error) {
    console.error("error deleting contact", error);
  }
}
