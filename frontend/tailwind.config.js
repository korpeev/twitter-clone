const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      accent: "rgb(29, 155, 240)",

      ...colors,
    },
  },
  plugins: [],
};
