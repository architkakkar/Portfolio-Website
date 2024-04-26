/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // This enables class-based dark mode
  theme: {
    screens: {
      xxs: "390px",
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "892px",
      xl: "1024px",
    },
    extend: {
      fontFamily: {
        wendy: "Wendy One, sans-serif",
        abeezee: "ABeeZee, sans-serif",
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
      lineHeight: {
        12: "3rem",
      },
      backgroundImage: {
        "hero-pattern-dark": "url('./src/assets/mobile/bg-pattern-1-dark.png')",
      },
      borderWidth: {
        1.5: "1.5px",
        3: "3px",
      },
      padding: {
        1.25: "5px",
      },
    },
  },
  plugins: [],
};
