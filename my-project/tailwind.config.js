/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      'orange': '#F2784B',
      'orange-bright': '#F25922',
      'green-bright': '#32A69A',
      'black': '#000000',
      'white': '#FFFFFF',
      'gray-light': '#F5F5F5',
      'coffee': '#AE9393',
      'pink-light': '#F2D0C4',
    },
    extend: {
      fontSize: {
        '20px': '20px',
        '18px': '18px',
        '16px': '16px',
        '14px': '14px',
        '13px': '13px',
        '12px': '12px',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    }
  ],
}

