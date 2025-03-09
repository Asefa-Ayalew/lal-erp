module.exports = {
  extends: ['@lal-erp/eslint-config/next'],
  rules: {
    '@next/next/no-html-link-for-pages': ['error', 'src/app'],
  },
};
