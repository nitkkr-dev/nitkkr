import { type Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.tsx', './components/**/*.tsx'],
  theme: {
    colors: {
      background: '#F9F5EB',
      neutral: {
        50: '#FAFAFA',
        100: '#F5F5F5',
        200: '#DBDBDB',
        300: '#C2C2C2',
        400: '#A8A8A8',
        500: '#8F8F8F',
        600: '#757575',
        700: '#424242',
        800: '#292929',
        900: '#101010',
      },
      primary: {
        100: '#EE928B',
        300: '#E7695F',
        500: '#E13F32',
        700: '#C5291D',
        900: '#971F16',
      },
      secondary: {
        100: '#004B9E',
        300: '#003A7A',
        500: '#002B5B',
        700: '#001D3D',
        900: '#000F1F',
      },
      shade: {
        light: '#FFFFFF',
        dark: '#000000',
      },
      success: '#27B13D',
      warning: '#D95C26',
      error: '#C5291D',
      transparent: 'transparent',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        md: '2rem',
      },
    },
    extend: {
      zIndex: {
        modal: '90',
        nav: '80',
        toast: '100',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
      serif: ['DM Serif Display', 'serif'],
      fingerpaint: ['Finger Paint', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      '6xl': ['64px', { lineHeight: '72px' }],
      '5xl': ['56px', { lineHeight: '64px' }],
      '4xl': ['48px', { lineHeight: '56px' }],
      '3xl': ['40px', { lineHeight: '48px' }],
      '2xl': ['32px', { lineHeight: '40px' }],
      xl: ['24px', { lineHeight: '32px' }],
      lg: ['20px', { lineHeight: '28px' }],
      base: ['16px', { lineHeight: '24px' }],
      sm: ['14px', { lineHeight: '22px' }],
      xs: ['12px', { lineHeight: '20px' }],
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
