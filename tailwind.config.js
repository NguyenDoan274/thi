/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: {
            light: '#FFF0F5',
            DEFAULT: '#FFB6C1',
            dark: '#FF69B4',
          },
          purple: {
            light: '#F8F8FF',
            DEFAULT: '#E6E6FA',
            dark: '#D8BFD8',
          },
          mint: {
            light: '#F0FFF0',
            DEFAULT: '#E0F8E8',
            dark: '#98FB98',
          },
          yellow: {
            light: '#FFFFF0',
            DEFAULT: '#FFFDD0',
            dark: '#F0E68C',
          }
        }
      },
      fontFamily: {
        sans: ['Quicksand', 'Nunito', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 3s',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
