import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";

export const experiences = pgTable("experiences", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  title: text("title").notNull(),
  company: text("company").notNull(),
  year: integer("year"),
  link: text("link"),
  location: text("location"),
  description: text("description").notNull(),
  user_id: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});
