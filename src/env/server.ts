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
	},

	client: {
		NEXT_PUBLIC_APP_URL: z.string(),
	},

	emptyStringAsUndefined: true,
	//eslint-disable-next-line n/no-process-env
	experimental__runtimeEnv: {
		NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL
	},
});
