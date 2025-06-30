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
        'ragdoll-blue': {
          50: '#f0f9ff',   // powder blue
          100: '#e0f2fe',  // sky blue light
          200: '#bae6fd',  // sky blue
          300: '#7dd3fc',  // bright sky blue
          400: '#38bdf8',  // sky blue medium
          500: '#0ea5e9',  // sky blue dark
          600: '#0284c7',  // blue
          700: '#0369a1',  // blue dark
          800: '#075985',  // navy blue
          900: '#0c4a6e',  // navy dark
        },
        'ragdoll-gray': {
          50: '#f8fafc',   // crisp white
          100: '#f1f5f9',  // light gray
          200: '#e2e8f0',  // silver
          300: '#cbd5e1',  // light silver
          400: '#94a3b8',  // medium gray
          500: '#64748b',  // gray
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
} 