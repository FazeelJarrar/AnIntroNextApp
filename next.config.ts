import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'plus.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
