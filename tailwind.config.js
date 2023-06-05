/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  content: ['./src/**/*.{html,js,tsx}'],
  theme: {
    fontSize: {
      small: '12px',
      regular: '14px',
      h6: '16px',
      h5: '18px',
      h4: '20px',
      h3: '24px',
      h2: '28px',
      h1: '32px',
    },
    fontWeight: {
      light: 200,
      regular: 400,
      bold: 600,
    },
    extend: {
      colors: {
        white: ' rgba(var(--semi-white), 1);',
        black: ' rgba(var(--semi-black), 1);',
        primary: ' rgba(var(--semi-blue-5), 1);',
        'primary-hover': ' rgba(var(--semi-blue-6), 1);',
        'primary-active': ' rgba(var(--semi-blue-7), 1);',
        'primary-disabled': ' rgba(var(--semi-blue-2), 1);',
        'primary-light-default': ' rgba(var(--semi-blue-0), 1);',
        'primary-light-hover': ' rgba(var(--semi-blue-1), 1);',
        'primary-light-active': ' rgba(var(--semi-blue-2), 1);',
        secondary: ' rgba(var(--semi-light-blue-5), 1);',
        'secondary-hover': ' rgba(var(--semi-light-blue-6), 1);',
        'secondary-active': ' rgba(var(--semi-light-blue-7), 1);',
        'secondary-disabled': ' rgba(var(--semi-light-blue-2), 1);',
        'secondary-light-default': ' rgba(var(--semi-light-blue-0), 1);',
        'secondary-light-hover': ' rgba(var(--semi-light-blue-1), 1);',
        'secondary-light-active': ' rgba(var(--semi-light-blue-2), 1);',
        tertiary: ' rgba(var(--semi-grey-5), 1);',
        'tertiary-hover': ' rgba(var(--semi-grey-6), 1);',
        'tertiary-active': ' rgba(var(--semi-grey-7), 1);',
        'tertiary-light-default': ' rgba(var(--semi-grey-0), 1);',
        'tertiary-light-hover': ' rgba(var(--semi-grey-1), 1);',
        'tertiary-light-active': ' rgba(var(--semi-grey-2), 1);',
        default: ' rgba(var(--semi-grey-0), 1);',
        'default-hover': ' rgba(var(--semi-grey-1), 1);',
        'default-active': ' rgba(var(--semi-grey-2), 1);',
        info: ' rgba(var(--semi-blue-5), 1);',
        'info-hover': ' rgba(var(--semi-blue-6), 1);',
        'info-active': ' rgba(var(--semi-blue-7), 1);',
        'info-disabled': ' rgba(var(--semi-blue-2), 1);',
        'info-light-default': ' rgba(var(--semi-blue-0), 1);',
        'info-light-hover': ' rgba(var(--semi-blue-1), 1);',
        'info-light-active': ' rgba(var(--semi-blue-2), 1);',
        success: ' rgba(var(--semi-green-5), 1);',
        'success-hover': ' rgba(var(--semi-green-6), 1);',
        'success-active': ' rgba(var(--semi-green-7), 1);',
        'success-disabled': ' rgba(var(--semi-green-2), 1);',
        'success-light-default': ' rgba(var(--semi-green-0), 1);',
        'success-light-hover': ' rgba(var(--semi-green-1), 1);',
        'success-light-active': ' rgba(var(--semi-green-2), 1);',
        danger: ' rgba(var(--semi-red-5), 1);',
        'danger-hover': ' rgba(var(--semi-red-6), 1);',
        'danger-active': ' rgba(var(--semi-red-7), 1);',
        'danger-light-default': ' rgba(var(--semi-red-0), 1);',
        'danger-light-hover': ' rgba(var(--semi-red-1), 1);',
        'danger-light-active': ' rgba(var(--semi-red-2), 1);',
        warning: ' rgba(var(--semi-orange-5), 1);',
        'warning-hover': ' rgba(var(--semi-orange-6), 1);',
        'warning-active': ' rgba(var(--semi-orange-7), 1);',
        'warning-light-default': ' rgba(var(--semi-orange-0), 1);',
        'warning-light-hover': ' rgba(var(--semi-orange-1), 1);',
        'warning-light-active': ' rgba(var(--semi-orange-2), 1);',
        'focus-border': ' rgba(var(--semi-blue-5), 1);',
        'disabled-text': ' rgba(var(--semi-grey-9), .35);',
        'disabled-border': ' rgba(var(--semi-grey-1), 1);',
        'disabled-bg': ' rgba(var(--semi-grey-1), 1);',
        'disabled-fill': ' rgba(var(--semi-grey-8), .04);',
        shadow: ' rgba(var(--semi-black), .04);',
        link: ' rgba(var(--semi-blue-5), 1);',
        'link-hover': ' rgba(var(--semi-blue-6), 1);',
        'link-active': ' rgba(var(--semi-blue-7), 1);',
        'link-visited': ' rgba(var(--semi-blue-5), 1);',
        border: ' rgba(var(--semi-grey-9), .08);',
        'nav-bg': ' rgba(var(--semi-white), 1);',
        'overlay-bg': ' rgba(22, 22, 26, .6);',
        'fill-0': ' rgba(var(--semi-grey-8), .05);',
        'fill-1': ' rgba(var(--semi-grey-8), .09);',
        'fill-2': ' rgba(var(--semi-grey-8), .13);',
        'bg-0': ' rgba(var(--semi-white), 1);',
        'bg-1': ' rgba(var(--semi-white), 1);',
        'bg-2': ' rgba(var(--semi-white), 1);',
        'bg-3': ' rgba(var(--semi-white), 1);',
        'bg-4': ' rgba(var(--semi-white), 1);',
        'text-0': ' rgba(var(--semi-grey-9), 1);',
        'text-1': ' rgba(var(--semi-grey-9), .8);',
        'text-2': ' rgba(var(--semi-grey-9), .62);',
        'text-3': ' rgba(var(--semi-grey-9), .35);',
        'shadow-elevated': ' 0 0 1px rgba(0, 0, 0, .3), 0 4px 14px rgba(0, 0, 0, .1);',
        'highlight-bg': ' rgba(var(--semi-yellow-4), 1);',
        highlight: ' rgba(var(--semi-black), 1);',
      },
    },
  },
  plugins: [],
};
