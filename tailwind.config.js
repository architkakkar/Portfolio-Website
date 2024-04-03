/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // This enables class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        wendy: "Wendy One, sans-serif",
      },
      colors: {
        dark: "#0E0E0E",
        light: "#ECF4D6",
      },
      backgroundColor: {
        dark: "#0E0E0E",
        light: "#ECF4D6",
        darkglass: "#1e1e1ef0",
      },
    },
  },
  plugins: [],
};
