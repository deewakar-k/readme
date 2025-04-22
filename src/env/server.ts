import { createEnv } from "@t3-oss/env-nextjs";
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
    PINATA_JWT: z.string(),
  },

  client: {
    NEXT_PUBLIC_APP_URL: z.string(),
    NEXT_PUBLIC_GATEWAY_URL: z.string(),
  },

  emptyStringAsUndefined: true,
  experimental__runtimeEnv: {
    //eslint-disable-next-line n/no-process-env
    NEXT_PUBLIC_GATEWAY_URL: process.env.NEXT_PUBLIC_GATEWAY_URL,

    //eslint-disable-next-line n/no-process-env
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
});
