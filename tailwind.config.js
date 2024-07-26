const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

export const content = [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./app/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  fontFamily: {
    sans: ["var(--font-poppins)", "sans-serif"],
  },
  extend: {
    colors: {
      colors,
      "violet-50": "#b18eef",
      "violet-100": "#8257e5",
      "violet-200": "#8234e9",
      "violet-250": "#9956f6",
      "gray-200": "#c7d2fe",
      "gray-100": "#737373",
      white: "#ffff",
      background: "#111827",
    },
    screens: {
      xs: "475px",
      small: "275px",
      tablet: "640px",
      ...defaultTheme.screens,
    },
    extend: {
      i18n: {
        locales: ["en", "pt-BR"],
        defaultLocale: "en",
      },
    },
  },
  backgroundImage: {
    "char-image": "url('/images/background.png')",
  },
  fontFamily: {
    mono: ["var(--font-plex-mono)", "monospace"],
  },
  boxShadow: {
    button: "0px 0px 68px 7px #9956f6",
  },
  keyframes: {
    overlayShow: {
      from: { opacity: "0" },
      to: { opacity: "1" },
    },
    contentShow: {
      from: { opacity: "0", transform: "translate(-50%, -48%) scale(0.96)" },
      to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
    },
  },
  animation: {
    overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
  },
};
export const plugins = [];
