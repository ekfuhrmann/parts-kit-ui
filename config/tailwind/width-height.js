const plugin = require('tailwindcss/plugin');

// validate number is numeric or not
const isNumeric = (num) =>
  (typeof num === 'number' || (typeof num === 'string' && num.trim() !== '')) &&
  !isNaN(num);

module.exports = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      wh: (value) => ({
        width: isNumeric(value) ? `${value}px` : value,
        height: isNumeric(value) ? `${value}px` : value,
      }),
    },
    { values: theme('wh') }
  );
});
