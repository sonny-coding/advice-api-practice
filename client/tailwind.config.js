/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-cyan": "hsl(193, 38%, 86%)",
        "neon-green": "hsl(150, 100%, 66%)",
        "grayish-blue": "hsl(217, 19%, 38%)",
        "dark-grayish-blue": " hsl(217, 19%, 24%)",
        "dark-blue": "hsl(218, 23%, 16%)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        neon: "0px 0px 100px 30px rgba(82,255,168,0.7);",
      },
    },
  },
  plugins: [],
};
