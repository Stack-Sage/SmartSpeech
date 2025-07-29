module.exports = {
  darkMode: "class", // class-based toggling, not media-based
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/auth/**/*.{js,jsx,ts,tsx}",
    "./src/context/**/*.{js,jsx,ts,tsx}",
    "./src/styles/**/*.{js,jsx,ts,tsx,css}"
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#fdf6ee',
          100: '#f7ecd9',
          200: '#f3e3c7',
          300: '#ecd6b0',
          400: '#e3c99a',
          500: '#d8b97e',
          600: '#bfa06a',
          700: '#a38657',
          800: '#7c6341',
          900: '#5c4a30',
        },
      },
    },
  },
  plugins: [],
};
