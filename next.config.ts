import type { NextConfig } from "next";

import "./src/env/server.ts";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "white-rapid-rhinoceros-811.mypinata.cloud",
    ],
  },
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
