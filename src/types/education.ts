import { education } from "@/db/schema";

export type EducationInput = Omit<typeof education.$inferInsert, "user_id">;
