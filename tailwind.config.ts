import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        main: "#FECE28",
        "main-dark": "#402E32",
        sub: "#FFC559",
        "sub-dark": "#4B2F00",
        post: "#B3AA99",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
