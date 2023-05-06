/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-red": "#9F3E3E",
        "darken-white": "#FDFDFD"
      },
      height: {
        'h-screen': "100svh"
      }
    },
  },
  plugins: [],
}