/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'very-dark-blue': 'hsl(233, 47%, 7%)',
        'soft-desaturated-blue': 'hsl(244, 38%, 16%)',
        'soft-violet-image': 'hsl(277, 64%, 37%)',
        'soft-violet':'hsl(277, 64%, 61%)',
        'main-paragraph': 'hsla(0, 0%, 100%, 0.75)',
        'stat-headings': 'hsla(0, 0%, 100%, 0.6)',
        'links':'hsl(228, 45%, 44%)',
        'attribution':'hsl(223, 47%, 23%)'
      },
      backgroundImage: {
        'image-header-desktop': "url('../images/image-header-desktop.jpg')",
        'image-header-mobile': "url('../images/image-header-mobile.jpg')"
      },
      fontSize: {
        'h1': '2.5rem',
        'h3': '1.75rem',
        'p': '15px'
      },
      fontFamily: {
        'body': ['Inter', '"Lexend Deca"']
      },
      screens: {
        'pc':'1270px',
      }
    },
  },
  plugins: [],
}
