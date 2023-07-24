/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        body: [
          "'Neue Haas Grotesk Display Pro', sans-serif",
          ...fontFamily.sans,
        ],
        heading: ["Padaloma", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
