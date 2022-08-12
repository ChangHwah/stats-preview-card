/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'very-dark-blue': 'hsl(233, 47%, 7%)',
        'soft-desaturated-blue': 'hsl(244, 38%, 16%)',
        'soft-violet': 'hsl(277, 64%, 61%)'
      },
      backgroundImage: {
        'image-header-desktop': "url('../images/image-header-desktop.jpg')"
      },
      brightness: {
        '35': '.35'
      },
      fontFamily: {
        'body': ['Inter', 'Lexend Deca', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
