import type { Config } from 'tailwindcss';
import { theme as baseTheme } from '@lal-erp/theme/tailwind';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    ...baseTheme,
  },
  plugins: [],
};
export default config;
