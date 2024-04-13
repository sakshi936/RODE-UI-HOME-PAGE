/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      screens: {
        'lg': '992px',
        // => @media (min-width: 992px) { ... }

        'ex-lg': '1200px',
        // => @media (min-width: 1200px) { ... }

      },
    },
  },
  plugins: [],
}

