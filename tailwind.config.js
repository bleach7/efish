/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat, sans-serif",
      },
      backgroundImage: {
        wave: "url('/imgs/wave.png')",
        "home-hero": "url('/imgs/home-hero.jpg')",
      },
    },
  },
  plugins: [],
};
