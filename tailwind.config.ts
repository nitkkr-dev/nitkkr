import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      serif: ['DM Serif Display', 'serif'],
      sans: ['DM Sans', 'sans-serif'],
    },
    fontWeight: {
      regular: '400',
      medium: '500',
      bold: '700',
    },
    fontSize: {
      display: ['64px', { lineHeight: '72px' }],
      h1: ['56px', { lineHeight: '64px' }],
      h2: ['48px', { lineHeight: '56px' }],
      h3: ['40px', { lineHeight: '48px' }],
      h4: ['32px', { lineHeight: '40px' }],
      h5: ['24px', { lineHeight: '32px' }],
      h6: ['20px', { lineHeight: '28px' }],
      p: ['16px', { lineHeight: '24px' }],
      label: ['14px', { lineHeight: '22px' }],
      tiny: ['12px', { lineHeight: '20px' }],
    },
    colors: {
      neutral: {
        10: '#FAFAFA',
        20: '#8F8F8F',
        30: '#DBDBDB',
        40: '#424242',
        50: '#F5F5F5',
        60: '#757575',
        70: '#C2C2C2',
        80: '#292929',
        90: '#A8A8A8',
        100: '#101010',
      },
      primary: {
        0: '#EE928B',
        10: '#E7695F',
        20: '#C5291D',
        30: '#E13F32',
        40: '#971F16',
      },
      error: {
        10: '#004B9E',
        20: '#002B5B',
        30: '#002B5B',
        40: '#001D3D',
        50: '#000F1F',
      },
      bg: '#F9F5EB',
      shades: {
        10: '#FFFFFF',
        20: '#000000',
      },
    },
  },
  plugins: [],
};
export default config;
