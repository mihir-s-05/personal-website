/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'trace-glow': 'trace-glow 3s linear infinite',
        'text': 'textGradient 5s linear infinite',
      },
      keyframes: {
        textGradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'trace-glow': {
          '0%, 100%': {
            boxShadow: '0 0 6px 8px rgba(255, 169, 64, 0.8), 0 0 10px 8px rgba(255, 169, 64, 0.6), 0 0 14px 8px rgba(255, 169, 64, 0.4)',
          },
          '25%': {
            boxShadow: '0 0 4px 2px rgba(236, 72, 153, 0.6), 0 0 8px 4px rgba(236, 72, 153, 0.4), 0 0 12px 6px rgba(236, 72, 153, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 4px 2px rgba(147, 51, 234, 0.6), 0 0 8px 4px rgba(147, 51, 234, 0.4), 0 0 12px 6px rgba(147, 51, 234, 0.2)',
          },
          '75%': {
            boxShadow: '0 0 4px 2px rgba(59, 130, 246, 0.6), 0 0 8px 4px rgba(59, 130, 246, 0.4), 0 0 12px 6px rgba(59, 130, 246, 0.2)',
          },
        },
      },
      
    },
  },
  plugins: [],
}