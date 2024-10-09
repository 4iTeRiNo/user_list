/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        accent:
          "linear-gradient(to left top, #070e18, #00364a, #006162, #008c51, #81af19);",
        second:
          "linear-gradient(to bottom, #6586b5, #287a94, #166868, #2a533d, #343d1f);",
      },
    },
  },
  plugins: [],
};

