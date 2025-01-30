import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nftprops-staging.apeironnft.com",
      },
    ],
  },
};

export default nextConfig;
