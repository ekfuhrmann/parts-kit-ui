// PostCSS Converts all `px` values to `rem`
const pxPair = (value) => ({ [value]: `${value}px` });

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '550px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      'sm-d': { max: '549.98px' },
      'md-d': { max: '767.98px' },
      'lg-d': { max: '1023.98px' },
      'xl-d': { max: '1439.98px' },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',
      gray: {
        100: '#D4D5D6',
        200: '#A9ABAD',
        300: '#7F8083',
        400: '#54565A',
        500: '#292C31',
        600: '#212327',
        700: '#191A1D',
        800: '#101214',
        900: '#08090A',
      },
      blue: {
        '00': '#F5F9FF',
        50: '#E6EFFF',
        100: '#D8E4FB',
        200: '#B1CAF7',
        300: '#8BAFF4',
        400: '#6495F0',
        500: '#3D7AEC',
        600: '#3162BD',
        700: '#25498E',
        800: '#18315E',
        900: '#0C182F',
      },
      red: {
        100: '#F6DAD4',
        200: '#EDB5A8',
        300: '#E4907D',
        400: '#DC6A52',
        500: '#D34526',
        600: '#A9371F',
        700: '#7E2A17',
        800: '#541C0F',
        900: '#2A0E08',
      },
      yellow: {
        100: '#FEF3D7',
        200: '#FEE8AF',
        300: '#FDDC87',
        400: '#FDD15E',
        500: '#FCC536',
        600: '#CA9E2B',
        700: '#977621',
        800: '#654F16',
        900: '#32270B',
      },
      green: {
        100: '#CFF1E7',
        200: '#9FE3CF',
        300: '#70D5B7',
        400: '#40C79E',
        500: '#10B986',
        600: '#0D946B',
        700: '#0A6F51',
        800: '#064A36',
        900: '#03251B',
      },
    },
    opacity: {
      0: '0',
      4: '0.04',
      8: '0.08',
      10: '0.1',
      20: '0.2',
      30: '0.3',
      50: '0.5',
      70: '0.7',
      90: '0.9',
      90: '0.9',
      100: '1',
    },
    boxShadow: ({ theme }) => ({
      card: `0 4px 20px ${theme('colors.gray.500/5%')},
            inset 0 0 0 1px ${theme('colors.blue.100')}`,
    }),
    spacing: {
      ...pxPair(0),
      ...pxPair(1),
      ...pxPair(2),
      ...pxPair(4),
      ...pxPair(6),
      ...pxPair(8),
      ...pxPair(10),
      ...pxPair(12),
      ...pxPair(14),
      ...pxPair(16),
      ...pxPair(18),
      ...pxPair(20),
      ...pxPair(21),
      ...pxPair(22),
      ...pxPair(24),
      ...pxPair(26),
      ...pxPair(28),
      ...pxPair(30),
      ...pxPair(32),
      ...pxPair(34),
      ...pxPair(36),
      ...pxPair(40),
      ...pxPair(44),
      ...pxPair(46),
      ...pxPair(48),
      ...pxPair(56),
    },
    minHeight: ({ theme }) => ({
      ...theme('spacing'),
    }),
    maxHeight: ({ theme }) => ({
      ...theme('spacing'),
    }),
    wh: {
      ...pxPair(14),
      ...pxPair(20),
      ...pxPair(24),
      ...pxPair(40),
      ...pxPair(46),
      ...pxPair(64),
    },
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
    },
    fontSize: {
      sm: ['12px', 1.5],
      md: ['14px', 1.5],
      lg: ['16px', 1.5],
    },
    borderRadius: {
      DEFAULT: '4px',
      ...pxPair(6),
      ...pxPair(8),
      full: '100%',
    },
    ringWidth: {
      ...pxPair(0),
      ...pxPair(1),
      ...pxPair(2),
    },
    ringOffsetWidth: {
      ...pxPair(0),
      ...pxPair(1),
      ...pxPair(2),
      ...pxPair(3),
      ...pxPair(4),
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('./config/tailwind/button.js'),
    require('./config/tailwind/inputs.js'),
    require('./config/tailwind/width-height.js'),
  ],
};
