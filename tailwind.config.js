/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-green': '#39FF14',
        'neon-green-bright': '#4AFF25',
        'amber-warm': '#FF8C00',
        'deep-black': '#0A0A0A',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'neon-green': '0 0 20px rgba(57, 255, 20, 0.3)',
        'neon-green-bright': '0 0 30px rgba(57, 255, 20, 0.5)',
      },
      animation: {
        'smoke-rise': 'smokeRise 15s linear infinite',
        'particle-float': 'particleFloat 8s linear infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};