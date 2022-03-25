module.exports = {
  content: ['./pages/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Oswald', 'sans-serif'],
        'body': ['"Open Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'fantom-bulls-gif': "url('https://firebasestorage.googleapis.com/v0/b/fantom-bulls.appspot.com/o/fantom-bulls.gif?alt=media&token=e8ef3cca-6e67-4a07-b8f6-7b28cdd79d7e')",
        'fantom-bulls': "url('https://firebasestorage.googleapis.com/v0/b/fantom-bulls.appspot.com/o/bg-opacity.png?alt=media&token=96312b4f-6aeb-41c8-be8b-66b291201c04')",
      },
      fontSize: {
        '7xl': '5rem',
      }
    },
  },
  plugins: [],
}