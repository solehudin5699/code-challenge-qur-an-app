/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#11009E',
          200: '#4942E4',
          300: '#8696FE',
          400: '#C4B0FF',
        },
        secondary: {},
      },
    },
  },
  plugins: [],
};
