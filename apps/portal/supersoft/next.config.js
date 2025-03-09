// next.config.js
const nextTranslate = require('next-translate');

/** @type {import('next').NextConfig} */
const nextConfig = nextTranslate({
  basePath: '/supersoft',
  reactStrictMode: true,
  transpilePackages: [
    '@lal-erp/theme',
    '@lal-erp/locale',
    '@lal-erp/auth',
    '@lal-erp/core-fe',
    '@lal-erp/entity',
  ],
  output: 'standalone',
  webpack(config, { isServer }) {
    // Configures webpack to handle SVG files with SVGR
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
});

module.exports = nextConfig;
