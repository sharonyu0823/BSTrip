/** @type {import('tailwindcss').Config} */

// module.exports = {
//   theme: {
//     screens: {
//       sm: '480px',
//       md: '768px',
//       lg: '976px',
//       xl: '1440px',
//     },
//     colors: {
//       'blue': '#1fb6ff',
//       'purple': '#7e5bef',
//       'pink': '#ff49db',
//       'orange': '#ff7849',
//       'green': '#13ce66',
//       'yellow': '#ffc82c',
//       'gray-dark': '#273444',
//       'gray': '#8492a6',
//       'gray-light': '#d3dce6',
//     },
//     fontFamily: {
//       sans: ['Graphik', 'sans-serif'],
//       serif: ['Merriweather', 'serif'],
//     },
//     extend: {
//       spacing: {
//         '128': '32rem',
//         '144': '36rem',
//       },
//       borderRadius: {
//         '4xl': '2rem',
//       }
//     }
//   }
// }

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
    },
    extend: {
      fontSize: {
        '20px': '20px',
        '18px': '18px',
        '16px': '16px',
        '14px': '14px',
      },
    },
  },
  plugins: [],
}

