/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/static/img/HeroImages/hero-background.png')",
      },
      boxShadow: {
        "1xl": "inset 0px 1px 1px",
      },
    },
  },
  plugins: [],
};
