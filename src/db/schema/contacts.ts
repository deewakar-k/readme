import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";

export const contacts = pgTable("contacts", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  title: text("institution").notNull(),
  link: text("degree").notNull(),
  user_id: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});
