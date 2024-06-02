/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'layer':
          "url('https://www.shutterstock.com/shutterstock/photos/671642395/display_1500/stock-vector-back-to-school-background-doodle-tic-tac-toe-game-pen-and-pencil-vector-seamless-pattern-671642395.jpg')",
      },
    },
  },
  plugins: [],
};
