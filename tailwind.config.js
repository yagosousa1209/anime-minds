/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      background: "#171717",
      primary: "#707000",
      letter_primary: "#FFFFFF",
      letter_secundary: "#9ca3af",
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif']
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.45rem',
      '2xl': '2rem',
      '3xl': '1.75rem',
      '4xl': '2.5rem',
      '5xl': '3rem',
    },
    screens: {
      'sm': '360px',
      'md': '720px',
      'lg': '1280px',
      'xl': '1440px',
      '2xl': '1920px',
    },
  },
  plugins: [],
}

