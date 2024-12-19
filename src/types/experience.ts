import { experiences } from "@/db/schema";

export type ExperienceInput = Omit<typeof experiences.$inferInsert, "user_id">;
