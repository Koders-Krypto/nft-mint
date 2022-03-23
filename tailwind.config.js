module.exports = {
  content: ['./pages/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Oswald', 'sans-serif'],
        'body': ['"Open Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'fantom-bulls-gif': "url('https://fantom-bulls.web.app/fantom-bulls.gif')",
        'fantom-bulls': "url('https://fantom-bulls.web.app/bg-opacity.png')",
      },
      fontSize: {
        '7xl': '5rem',
      }
    },
  },
  plugins: [],
}