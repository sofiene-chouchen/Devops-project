/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        700: "43.75rem",
        500: "31.25rem",
      },
      colors: {
        vert: "#002C17",
      },
    },
  },
  plugins: [],
};
