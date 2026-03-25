/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'soft-pink': '#FDF6F0',
          'girly-pink': '#F9A8D4',
        },
      },
    },
    plugins: [],
  }