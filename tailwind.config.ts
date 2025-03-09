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
        introDesktop: "url(/images/jpg/intro.jpg)",
        introDesktopTest: "url(/images/jpg/qwe.jpg)",
        introDesktopTest2: "url(/images/jpg/main2.jpg)",
        introDesktopTest2_mobile: "url(/images/jpg/main2_mobile.jpg)",
        introDesktopTest3: "url(/images/jpg/main3.jpg)",
        introMobile: "url(/images/jpg/intro_mobile.jpg)",
        introTablet: "url(/images/jpg/intro_tablet.jpg)",
        nabor: "url(/images/jpg/nabor.jpg)",
        lips: "url(/images/jpg/catalog/simulator_1.jpg)",
        course: "url(/images/jpg/qwe.jpg)",
      },
      // screens: {
      //   // "sm": "400px",
      //   "md": "332px",
      //   "lg": "588px",
      //   "xl": "844px",
      //   "2xl": "1100px"
      // },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "1rem",
          lg: "3rem",
          xl: "5rem",
        },
        screens: {
          // "sm": "400px",
          md: "332px",
          lg: "588px",
          xl: "844px",
          "2xl": "1100px",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "up-btn-up": {
          from: { transform: "translateX(100%)", opacity: "0" },
          to: { transform: "translateX(0%)", opacity: "1" },
        },
        "up-btn-down": {
          from: { transform: "translateX(0%)", opacity: "1" },
          to: { transform: "translateX(1000%)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "up-btn-down": "up-btn-down 0.2s ease-out",
        "up-btn-up": "up-btn-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  autoprefixer: {},
};
export default config;
