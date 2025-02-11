/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "packages-color": "#f00",
        "packages-color2": "#ff0",
      },
    },
  },
  plugins: [],
}
