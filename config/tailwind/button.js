const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addComponents }) => {
  // Base styles
  const base = {
    '@apply inline-flex transition-colors rounded-8 duration-200 items-center justify-center text-center focus:outline-none shrink-0':
      {},
    '&:is(.btn, .btn-outline):not(.btn-sm, .btn-icon)': {
      '@apply h-46 px-20 gap-8': {},
    },
    '&:not(.btn-sm)': {
      '@apply text-lg': {},
    },
    '&:not(.btn-icon) svg': {
      '@apply -mx-4': {}, // handles icon padding offset
    },
  };

  const buttons = {
    // Variants
    '.btn': {
      ...base,
      '@apply bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 disabled:!ring-gray-200  disabled:!bg-blue-50 disabled:!text-blue-300 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2':
        {},
    },
    '.btn-outline': {
      ...base,
      '@apply bg-transparent text-blue-500 border border-blue-50 hover:bg-blue-50 hover:border-blue-600 hover:text-blue-600 active:bg-blue-100 disabled:!ring-gray-200 disabled:!bg-blue-50 disabled:!text-blue-300 disabled:!border-blue-100 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2':
        {},
    },
    '.btn-subtle': {
      ...base,
      '@apply bg-transparent text-blue-500 p-10 -m-10 gap-6 hover:bg-blue-50 active:bg-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:bg-white focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:!bg-blue-50 disabled:!text-blue-300':
        {},
    },
    '.btn-inline-link': {
      ...base,
      '@apply relative bg-transparent text-blue-500 rounded gap-6 hover:text-blue-600 active:text-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:bg-white focus-visible:ring-offset-4':
        {},
      '&:hover::after': {
        content: '""',
        '@apply shadow-[inset_0_-1.5px_currentcolor] block absolute inset-0':
          {}, // handles underline style
      },
    },

    // Sizes
    '.btn-sm': {
      '@apply text-md': {},

      '&:is(.btn, .btn-outline)': {
        '@apply h-40 px-16 gap-6': {},
      },
    },

    // Icon sizes
    '.btn-icon': {
      fontSize: '0 !important',
      lineHeight: '0 !important',
      '@apply !gap-0 !p-0 wh-46': {},

      '&.btn-sm': {
        '@apply wh-40': {},
      },
    },

    // Button toggle
    '.btn-toggle-group': {
      '@apply inline-flex items-center rounded bg-white ring-1 ring-blue-100 divide-x divide-blue-100':
        {},
    },
    '.btn-toggle': {
      '@apply wh-46 flex items-center justify-center transition-colors text-blue-500 transition duration-300 first:rounded-l last:rounded-r hover:bg-blue-50 hover:border-blue-600 hover:text-blue-600 active:bg-blue-100 disabled:!bg-blue-50 disabled:!text-blue-300 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2':
        {},
      svg: {
        '@apply wh-20': {},
      },
    },
  };

  addComponents(buttons);
});

/**
  TODO: Needs destructive variant added

  Probably best to add `&.btn-destructive` to each
  with styles associated to that button variant
*/
