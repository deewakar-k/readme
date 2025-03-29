import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import { env } from "@/env/server";

import * as schema from "./schema";

// Cache the database connection in development to avoid reconnecting on HMR
const globalForDb = globalThis as unknown as {
  conn: Pool | undefined;
};

// Use the cached connection if available
const pool =
  globalForDb.conn ?? new Pool({ connectionString: env.DATABASE_URL });
if (env.NODE_ENV !== "production") globalForDb.conn = pool;

export const db = drizzle(pool, { schema });
