/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'very-dark-blue': 'hsl(233, 47%, 7%)',
        'soft-desaturated-blue': 'hsl(244, 38%, 16%)',
        'soft-violet': 'hsl(277, 64%, 61%)',
        'main-paragraph': 'hsla(0, 0%, 100%, 0.75)',
        'stat-headings': 'hsla(0, 0%, 100%, 0.6)'
      },
      brightness: {
        '35': '.35'
      },
      fontSize: {
        'h1': '2.5rem',
        'h2': '2rem',
        'p': '1rem'
      },
      fontFamily: {
        'body': ['Inter', '"Lexend Deca"']
      }
    },
  },
  plugins: [],
}
