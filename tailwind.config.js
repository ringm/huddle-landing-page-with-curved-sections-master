module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        'custom-pink': '#FF52BF',
        'custom-cyan': '#00252E',
        'pale-blue': '#F5FAFF',
        'custom-gray': '#808E9A',
      },
      fill: {
        'custom-pink': '#FF52BF',
        'custom-cyan': '#00252E',
        'pale-blue': '#F5FAFF',
        'custom-gray': '#808E9A',
      },
      fontFamily: {
        display: [
          '"Poppins"'
        ],
        body: [
          '"Open Sans"'
        ],
      },
      fontSize: {
        '8xl': '6rem',
      },
      inset: {
        '100': '100%',
      }
    },
  },
  variants: {
    transform: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    fill: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [],
}
