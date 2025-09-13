import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // ✅ Disable type checking during build
    ignoreBuildErrors: true,
  },
  eslint: {
    // ✅ Disable ESLint blocking builds (optional)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
