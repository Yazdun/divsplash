/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        grayscale: {
          100: '#fafafa',
        },
      },
      container: {
        center: true,
        padding: '1.25rem',
        screens: {
          '3xl': '1200px',
        },
      },
      boxShadow: {
        sm: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        '3xl': 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px',
      },
    },
  },
  plugins: [],
}
