import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").unique().notNull(),
  username: text("username").unique().notNull(),
  password: text("passowrd").notNull(),
  image: text("image"),
  created_at: timestamp("created_at").defaultNow().notNull(),
});
