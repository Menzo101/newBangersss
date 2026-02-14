/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff614d",
        secondary: "#F59E0B",
        success: "#16A34A",
      },
    },
  },
  plugins: [],
};
