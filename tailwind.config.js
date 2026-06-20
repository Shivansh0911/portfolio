/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#050816',
        primary: '#915EFF',
        secondary: '#00D9FF',
        accent: '#FF6B35',
        gold: '#F59E0B',
        surface: '#0F0F23',
        surface2: '#151530',
        muted: '#AAB4C8',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(145,94,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(145,94,255,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '50px 50px',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};
