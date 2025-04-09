import type { NextConfig } from "next";

import "./src/env/server.ts";

const nextConfig: NextConfig = {
	images: {
		domains: ['lh3.googleusercontent.com'],
	},
	experimental: {
		typedRoutes: true,
	},
};

export default nextConfig;
