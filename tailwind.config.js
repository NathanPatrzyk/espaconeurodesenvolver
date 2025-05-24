/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        decoration: ["Pacifico", "cursive"],
      },
      colors: {
        "light-neuro": "#FFFFFF",
        "dark-neuro": "#545150",

        "light-cyan-neuro": "#7AD2CA5A",
        "cyan-neuro": "#7AD2CA",
        "dark-cyan-neuro": "#54C5BB",
      },
      keyframes: {
        goback: {
          "0%, 100%": {
            transform: "translateY(-15px)",
          },
          "50%": {
            transform: "translateY(15px)",
          },
        },
      },
      animation: {
        goback: "goback 10s linear infinite",
      },
    },
  },
  plugins: [],
};
