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
        dark: "rgb(var(--foreground-rgb))", // White text
        light: "rgb(var(--background-start-rgb))", // Black background
        gray: "#b1b1b1", // Gray text
        link: "#7187ff", // Blue links
        quote: "#7d7d7d", // Quote text color
        "background-dark": "rgb(var(--background-start-rgb))", // Black background
        "background-white": "rgb(var(--background-end-rgb))", // For contrast elements
        "background-border": "#1b1b1c", // Dark border color
        "border-black": "rgb(var(--foreground-rgb))", // White borders
      },
    },
  },
  plugins: [],
};
export default config;
