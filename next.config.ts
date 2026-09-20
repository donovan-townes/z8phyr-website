import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  // Keep this project independent when it sits inside another workspace.
  turbopack: { root: process.cwd() },
};
export default nextConfig;
