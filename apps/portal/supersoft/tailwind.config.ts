import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#f6faf3",
          "100": "#e3f2fd",
          "200": "#bbdefb",
          "300": "#90caf9",
          "400": "#64b5f6",
          "500": "#42a5f5",
          "600": "#2196f3", 
          "700": "#1e88e5",
          "800": "#1976d2",
          "900": "#1565c0",
          "950": "#0d47a1",
        },
        secondary: {},
      },
      container: {
        padding: "1rem",
        screens: {
          xs: "412px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
      screens: {
        xs: "412px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
