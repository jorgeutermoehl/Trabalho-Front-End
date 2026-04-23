import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1180px',
        '2xl': '1240px',
      },
    },
    extend: {
      colors: {
        bg: {
          DEFAULT: '#FBF8F3',
          alt: '#F1EBDE',
        },
        surface: '#FFFFFF',
        primary: {
          DEFAULT: '#7E9A84',
          600: '#5F7A66',
          700: '#4C6353',
        },
        secondary: '#B8A99A',
        accent: '#C08B76',
        ink: '#1C1B18',
        muted: '#6E6A62',
        border: '#E6DFD1',
        hover: '#EBE3D4',
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: [
          '"Inter"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'monospace',
        ],
      },
      fontSize: {
        'display-lg': [
          'clamp(2.75rem, 1.8rem + 4.5vw, 4.75rem)',
          { lineHeight: '1.04', letterSpacing: '-0.02em' },
        ],
        'display-md': [
          'clamp(2rem, 1.4rem + 2.6vw, 2.875rem)',
          { lineHeight: '1.1', letterSpacing: '-0.015em' },
        ],
        eyebrow: ['0.75rem', { lineHeight: '1', letterSpacing: '0.18em' }],
      },
      letterSpacing: {
        'tight-2': '-0.015em',
      },
      boxShadow: {
        card: '0 1px 2px rgba(28,27,24,0.04), 0 8px 24px -12px rgba(28,27,24,0.08)',
        'card-hover':
          '0 2px 4px rgba(28,27,24,0.05), 0 14px 32px -14px rgba(28,27,24,0.14)',
        ring: '0 0 0 4px rgba(126,154,132,0.28)',
      },
      borderRadius: {
        xl: '14px',
        '2xl': '20px',
        '3xl': '28px',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
} satisfies Config;
