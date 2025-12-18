/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f4f7f4',
          100: '#e6ebe5',
          200: '#cedccd',
          300: '#a8c1a6',
          400: '#8BA888',
          500: '#628660',
          600: '#4d6b4b',
          700: '#3f563e',
          800: '#354634',
          900: '#2d3b2c',
        },
        cream: '#F8F6F1',
        warmgray: {
          500: '#5C5C5C',
          700: '#3D3D3D',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
