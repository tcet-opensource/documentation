const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/static/img/HeroImages/hero-background.png')",
      },
      boxShadow: {
        "1xl": "inset 0px 2px 1px",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        title: ["Sora", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
