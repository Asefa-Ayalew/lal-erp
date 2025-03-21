/** @type {import('next').NextConfig} */
const nextConfig = { 
  basePath: '/po',
  reactStrictMode: true,
  transpilePackages: [
    '@lal-erp/theme',
    '@lal-erp/core', 
    '@lal-erp/ui',
  ],
  output: 'standalone',
 };

module.exports = nextConfig;