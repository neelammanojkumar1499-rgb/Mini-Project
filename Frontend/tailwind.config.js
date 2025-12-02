/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#4f8ee5',
        'primary-teal': '#43c6ac',
        'background': '#f9fcff',
        'soft-blue': '#e1effd',
        'soft-teal': '#ccf2e8',
      },
      fontFamily: {
        sans: ['Nunito', 'Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 16px 0 rgba(34,168,224,0.10), 0 1.5px 4px 0 rgba(67,198,172,0.08)',
      },
      borderRadius: {
        card: '1.5rem'
      }
    },
  },
  plugins: [],
}