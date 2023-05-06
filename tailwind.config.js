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
        'screen': "100svh",
        '9/10': "90%",
        '8/10': "80%",
        '7/10': "70%",
        '6/10': "60%",
        '5/10': "50%",
        '4/10': "40%",
        '3/10': "30%",
        '2/10': "20%",
        '1/10': "10%",
      }
    },
    height: {
      'h-screen': "100svh"
    }
  },
  plugins: [],
}