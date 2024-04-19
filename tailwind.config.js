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
      keyframes: {
        goback: {
          '0%, 100%': {
            transform: 'translateY(-10px)'
          },
          '50%': {
            transform: 'translateY(10px)'
          }
        }
      },
      animation: {
        goback: 'goback 8s linear infinite' 
      }
    },
  },
  plugins: [],
}