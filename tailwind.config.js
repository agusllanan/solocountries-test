/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/tw-elements/dist/js/**/*.js',
    './node_modules/flowbite-react/**/*.js',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#BCDDFE',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        work: ['Work Sans', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      fontSize: {
        xxs: '.50rem',
        xs: '.75rem',
        sm: '.875rem',
        tiny: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
    },
    screens: {
      xxs: '350px',
      xs: '480px',
      ss: '620px',
      sm: '678px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [require('tw-elements/dist/plugin.cjs'), require('flowbite/plugin')],
};
