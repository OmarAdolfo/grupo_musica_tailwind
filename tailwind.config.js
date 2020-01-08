const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    fontFamily: {
      body: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        gray: '#344955',
        yellow: '#f9aa33'
      },
      borderWidth: {
        '7': '7px'
      }
    }
  },
  variants: {},
  plugins: []
}
