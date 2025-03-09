
import type { Config } from 'tailwindcss';
import { theme as baseTheme } from '@lal-erp/theme/tailwind';
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    ...baseTheme,
  },
  plugins: [],
};
export default config;
