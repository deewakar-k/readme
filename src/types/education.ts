import { education } from "@/db/schema";

export type newEducation = typeof education.$inferInsert;

export interface Education {
  institution: string;
  location: string;
  year: number;
  degree: string;
  description: string;
}
