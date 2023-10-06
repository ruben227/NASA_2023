/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      maxWidth: {
        nav: "75rem",
      },
      colors: {
        "main-purple": "#9146DC",
      },
    },
  },
  plugins: [],
};
