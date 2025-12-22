import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'http', hostname: 'localhost', port: '5001', pathname: '/uploads/**' },
      { protocol: 'http', hostname: '127.0.0.1', port: '5001', pathname: '/uploads/**' },
    ],
  },
};

export default nextConfig;
