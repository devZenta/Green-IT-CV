import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 60,
    unoptimized: false,
  },
  compress: true,
};

export default nextConfig;
