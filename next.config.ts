import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbo: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
} as unknown as NextConfig;

export default nextConfig;