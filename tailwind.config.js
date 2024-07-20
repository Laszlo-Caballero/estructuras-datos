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
      },
    },
  },
  plugins: [],
};
