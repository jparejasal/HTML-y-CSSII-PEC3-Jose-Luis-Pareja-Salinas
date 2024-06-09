/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'verdana': ['Verdana', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

