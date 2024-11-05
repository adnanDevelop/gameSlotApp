/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FFDD15",
        green: "#00FF86",
        red: "#E22028",
        gray: "#262626",
        content: "#BBBBBB",
      },
      fontFamily: {
        primary: ["Oxanium", "sans-serif"],
        secondary: ["Poppins", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1500px",
      },
      backgroundImage: {
        "green-gradient": "linear-gradient(to left, #01D370, #016D3A)",
        "yellow-gradient": "linear-gradient(to left, #FFDD15, #FCB346)",
        "yellow-gradient-two": "linear-gradient(to left, #FCA612, #FCA612)",
        "yellow-gradient-light": "linear-gradient(to left, #FFDD15, #FCB346)",
        "red-gradient": "linear-gradient(to left, #E22028, #C3151C)",
        "gray-gradient": "linear-gradient(to left, #E2B470, #967139)",
      },
    },
  },
  plugins: [],
};
