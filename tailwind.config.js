/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#ebeeff",
          100: "#dae1ff",
          200: "#bcc5ff",
          300: "#939eff",
          400: "#696aff",
          500: "#5346ff",
          600: "#4625ff",
          700: "#4625e9",
          800: "#3118bb",
          900: "#2c1d92",
          950: "#1b1155",
        },
        monsoon: {
          50: "#f6f6f7",
          100: "#efeff0",
          200: "#e1e1e4",
          300: "#ceced3",
          400: "#bab9c0",
          500: "#a8a6ae",
          600: "#8d8a93",
          700: "#807d85",
          800: "#69666d",
          900: "#56555a",
          950: "#333234",
        },
      },
    },
  },
  plugins: [],
};
