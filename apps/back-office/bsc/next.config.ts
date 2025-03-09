/** @type {import('next').NextConfig} */
const nextConfig = { 
  basePath: '/bsc',
  reactStrictMode: true,
  transpilePackages: ['@lal-erp/theme','@lal-erp/auth','@lal-erp/core-fe','@lal-erp/entity'],
  output: 'standalone',
 };

module.exports = nextConfig;
