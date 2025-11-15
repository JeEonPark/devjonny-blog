import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary))",
        black: "rgb(var(--black))",
        white: "rgb(var(--white))",
        gray: {
          DEFAULT: "rgb(var(--gray))",
          light: "rgb(var(--gray-light))",
          dark: "rgb(var(--gray-dark))",
        },
      },
    },
  },
  plugins: [],
};

export default config;
