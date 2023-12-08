/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
      colors: {
        'text': '#f2e3f2',
        'background': '#070407',
        'primary': '#d4a3d5',
        'secondary': '#754935',
        'accent': '#bdac6d',
      },

    },
  },
  plugins: [],
}