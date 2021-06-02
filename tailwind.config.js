module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#003C5A',
        blueDefault: '#0087CA',
        blueHover: '#0070A8',
        greenDefault: '#3CC88C',
        grayDefault: {
          100: '#F7F7F7',
          200: '#B0B0B0',
          300: '#4A4A4A',
          400: '#DBE3E7',
        },
        spacing: {
          px424: 'padding-left: 424px; padding-right: 424px;'
        },
      },
      fontFamily: {
        body: ['Montserrat']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
