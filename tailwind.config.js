/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lynch: {
          50: "#f6f7f9",
          100: "#eceef2",
          200: "#d5d9e2",
          300: "#b1bbc8",
          400: "#8695aa",
          500: "#64748b",
          600: "#526077",
          700: "#434e61",
          800: "#3a4252",
          900: "#343a46",
          950: "#23272e",
        },
      },
      fontFamily: {
        Inter: "./Inter.tff",
      },
    },
  },
  plugins: [],
};
