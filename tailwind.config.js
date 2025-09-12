/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-out forwards",
        fadeIn: 'fadeIn 0.8s ease-out forwards',

      },
      colors: {
        teal: { 400: "#14B8A6" },
        gray: { 900: "#0F172A", 800: "#1E293B", 700: "#334155", 300: "#D1D5DB" },
      },
    },
  },
  plugins: [],
}
