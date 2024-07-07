import type { Config } from "tailwindcss";
import { COLORS } from "./src/constants/color.constants";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: COLORS,
      backgroundImage: {
        "introDesktop": "url(/images/jpg/intro.jpg)"
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
  autoprefixer: {},
};
export default config;
