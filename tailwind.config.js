/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/theme";
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|input|ripple|spinner|form).js",
  ],
  theme: {
    extend: {
      fontSize: {
        "2xl": [
          "1.5rem",
          {
            lineHeight: "2rem",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
        "2xs": [
          "10px",
          {
            lineHeight: "16px",
            letterSpacing: "-0.02em",
            fontWeight: "500",
          },
        ],
      },
      colors: {
        "app-primary-color": "#FF4E50",
        "app-secondary-color": "#A77BFF",
        "app-tertiary-color": "#00E5FF",
        "app-text-color": "#1C313F",
        "app-success-color": "#13FEAB",
        "app-danger-color": "#EF457A",
        "app-warning-color": "#FFBC00",
      },
      screens: {
        xs: "391px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  //darkMode: "class",
  plugins: [
    function ({ addUtilities }) {
      const customUtilities = {
        ".app-xs-height": {
          height: "calc(100vh - 64px)",
        },
        ".app-xs-width": {
          width: "calc(100vw - 48px)",
        },
        ".app-sm-width": {
          width: "592px",
        },
        ".app-md-width": {
          width: "720px",
        },
        ".app-lg-width": {
          width: "976px",
        },
        ".app-xl-width": {
          width: "1232px",
        },
      };
      addUtilities(customUtilities);
    },
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            primary: "#FF4E50",
            secondary: "#A77BFF",
            terciary: "#00E5FF",
            success: "#13FEAB",
            danger: "#EF457A",
            warning: "#FFBC00",
          },
        },
        dark: {
          colors: {
            primary: "#FF4E50",
            secondary: "#A77BFF",
            terciary: "#00E5FF",
            success: "#13FEAB",
            danger: "#EF457A",
            warning: "#FFBC00",
          },
        },
      },
    }),
  ],
};
