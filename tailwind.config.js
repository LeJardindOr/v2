// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "screen-4xl": "114rem",
      },
      colors: {
        "dark-green": "#0B3D2C",
        "light-green": "#0C5139",
      },
    },
  },
  plugins: [],
};
