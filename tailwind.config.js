/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      // ...
      'primary': {
        light: '#67e8f9',
        DEFAULT: '#06b6d4',
        dark: '#0e7490',
      },
      'light': {
        light: '#ffffff',
        DEFAULT: '#dadada',
        dark: '#afafaf',
      },
      // ...
    },
  },
  plugins: [],
}

