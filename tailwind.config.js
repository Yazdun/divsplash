/** @type {import('tailwindcss').Config} */
import { withUt } from "uploadthing/tw";

module.exports = withUt(
  {  
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
        },
      },
    },
    plugins: [],
  }
  
)