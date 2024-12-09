import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";

export const projects = pgTable("projects", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  title: text("title").notNull(),
  year: integer("year").notNull(),
  link: text("link"),
  description: text("description").notNull(),
  user_id: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});
