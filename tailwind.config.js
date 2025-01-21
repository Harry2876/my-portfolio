/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'blob': 'blob 7s infinite',
        'float': 'float 20s ease-in-out infinite',
        'float-slow': 'float 30s ease-in-out infinite',
        'float-slower': 'float 35s ease-in-out infinite',
        'float-fast': 'float 15s ease-in-out infinite',
        'float-faster': 'float 10s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-out': 'fadeOut 0.5s ease-out forwards'
      },
      colors: {
        dark: {
          bg: '#121212',
          surface: '#1E1E1E',
          text: '#FFFFFF',
        },
        light: {
          bg: '#FFFFFF',
          surface: '#F3F4F6',
          text: '#1F2937',
        },
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(50px, 50px) rotate(180deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-20px)' }
        }
      },
      transitionTimingFunction: {
        'smooth-scroll': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
    },
  },
  plugins: [],
};