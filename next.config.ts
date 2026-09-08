import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Enables React's <ViewTransition> during route navigation (morph effect).
    viewTransition: true,
  },
};

export default nextConfig;
