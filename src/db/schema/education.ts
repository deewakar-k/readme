import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";

export const education = pgTable("education", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  institution: text("institution").notNull(),
  location: text("location"),
  year: integer("year"),
  degree: text("degree").notNull(),
  description: text("description").notNull(),
  user_id: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});
