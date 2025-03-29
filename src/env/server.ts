import { createEnv } from "@t3-oss/env-nextjs";
import { StandardSchemaV1 } from "better-auth";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
    BETTER_AUTH_SECRET: z.string(),
    DATABASE_URL: z.string(),
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),
    GITHUB_CLIENT_ID: z.string(),
    GITHUB_CLIENT_SECRET: z.string(),
  },

  client: {
    NEXT_PUBLIC_APP_URL: z.string(),
  },

  onValidationError: (issues: StandardSchemaV1.Issue[]) => {
    console.error("❌ Invalid environment variables:", issues);
    throw new Error("Invalid environment variables");
  },

  emptyStringAsUndefined: true,
  //eslint-disable-next-line n/no-process-env
  experimental__runtimeEnv: process.env,
});
