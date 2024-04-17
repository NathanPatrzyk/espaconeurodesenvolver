/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-neuro': '#FFFFFF',
        'dark-neuro': '#545150',

        'light-cyan-neuro': '#7AD2CA5A',
        'cyan-neuro': '#7AD2CA',
        'dark-cyan-neuro': '#54C5BB',
      },
      backgroundImage: {
        'main': "url('src/assets/main.webp')",
        'pediasuit': "url('src/assets/pediasuit.webp')",
      }
    },
  },
  plugins: [],
}