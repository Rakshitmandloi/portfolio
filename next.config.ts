import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Configure for GitHub Pages with repository name
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
};

export default nextConfig;
