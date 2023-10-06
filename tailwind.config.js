const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",],
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
    fontSize: {
      '5xl': '2.8rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
    },
  },
  corePlugins: {
    preflight: false,
  }
  // plugins: [
  //   require('@tailwindcss/typography'),
  // ],
};
