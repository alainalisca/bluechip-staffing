import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Refined navy palette
        navy: {
          50: '#f7f8f9',
          100: '#ebeef1',
          200: '#d4dbe3',
          300: '#b0bcc9',
          400: '#8597ab',
          500: '#667a90',
          600: '#516277',
          700: '#435061',
          800: '#3a4452',
          900: '#1a1f26',
          950: '#0d1015',
        },
        // Warm accent (sophisticated gold/bronze)
        accent: {
          50: '#fdf8f3',
          100: '#f9edd9',
          200: '#f3d9b3',
          300: '#e9be82',
          400: '#de9d4f',
          500: '#d4832e',
          600: '#c56a23',
          700: '#a4511f',
          800: '#844220',
          900: '#6b371d',
        },
        // Clean cream for backgrounds
        cream: {
          50: '#fefdfb',
          100: '#faf8f3',
          200: '#f5f0e6',
        },
      },
      fontFamily: {
        // Editorial serif for headlines
        display: ['Playfair Display', 'Georgia', 'serif'],
        // Clean sans for body
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Editorial scale
        'display-xl': ['5.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-lg': ['4rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'display-sm': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
