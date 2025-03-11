/** @type {import('next').NextConfig} */
const nextConfig = { 
  basePath: '/balanceScorecard',
  reactStrictMode: true,
  transpilePackages: ['@lal-erp/theme','@lal-erp/auth','@lal-erp/core-fe', '@lal-erp/ui','@lal-erp/entity'],
  output: 'standalone',
 };

module.exports = nextConfig;
