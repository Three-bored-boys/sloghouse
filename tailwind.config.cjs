const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
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
      screens: {
        xs: "375px",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      animation: {
        "spin-slow": "spin 30s linear infinite",
      },
    },
  },
  plugins: [],
};
