const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addComponents }) => {
  // Base styles
  const inputs = {
    '.field-wrapper': {
      '@apply flex flex-col gap-8': {},

      '& label': {
        '@apply text-md text-gray-900': {},
      },
    },
    '.form-input': {
      // base styles
      '@apply min-h-48 h-0 rounded border-0 bg-white text-gray-900 ring-1 ring-blue-100 transition-all':
        {},
      // placeholder styles
      '@apply placeholder:text-gray-300': {},
      // hover styles
      '@apply hover:ring-blue-300': {},
      // focus styles
      '@apply focus:ring-2 focus:ring-blue-500': {},
      // invalid styles
      '@apply invalid:ring-red-500 invalid:hover:ring-red-600 invalid:focus:ring-red-500':
        {},
      // disabled styles
      '@apply disabled:bg-blue-50 disabled:text-blue-700 disabled:ring-0 disabled:placeholder:text-blue-500':
        {},
    },
  };

  addComponents(inputs);
});
