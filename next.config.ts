import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "sample-bowling-center-website";
const basePath = isProd ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: isProd ? `/${repo}/` : "",
  // next/image doesn't prefix basePath onto string srcs, so expose it to asset().
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
