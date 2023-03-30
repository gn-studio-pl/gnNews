/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'mobile': { 'max': '767px' },
      'tablet': { 'min': '768px', 'max': '1023px' },
      'desktop': { 'min': '1024px' },
    },
    colors: {
      'primary': '#1C1E21',
      'secondary': '#2565ac',
      'white': '#ffffff',
      'black': '#000000',
      'lightgray': '#e2e8f0',
      'darkgray': '#0f172a',
      "bgFooter": '#303846',
      'transparent': 'transparent'
    },
    fontFamily: {
      'sans': 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif'
    },
    extend: {
      zIndex: {
        '100': '100'
      },
      maxWidth: {
        '8xl': '90rem'
      },
      minHeight: {
        '15': '15rem'
      }
    },
  },
  plugins: [],
}
