/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F172A',
          hover: '#1E293B',
        },
        secondary: {
          DEFAULT: '#1E293B',
          hover: '#334155',
        },
        accent: {
          DEFAULT: '#F59E0B',
          dark: '#D97706',
          light: '#FBBF24',
          glow: 'rgba(245, 158, 11, 0.15)',
        },
        success: {
          DEFAULT: '#10B981',
          dark: '#047857',
        },
        brandBg: {
          light: '#F8FAFC',
          dark: '#0B0F19',
        },
        brandText: {
          light: '#0F172A',
          dark: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'Cairo', 'Tajawal', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 30s linear infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      }
    },
  },
  plugins: [],
}

