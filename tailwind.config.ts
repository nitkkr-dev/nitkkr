import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '4rem',
        md: '6rem',
        lg: '8rem',
        xl: '10rem',
        '2xl': '12rem',
      },
    },
    extend: {
      backgroundImage: {
        notifications:
          "linear-gradient(rgba(249, 245, 235, 0.6) 0%, rgba(249, 245, 235, 0.8) 85%, rgba(249, 245, 235, 1) 100%), url('https://s3-alpha-sig.figma.com/img/cff6/b90c/6d452f4caad45a22f4d4a701c7b48bce?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pXiNpSpLsmtFI9JXmo9h-cYFyP0m07hqsPbJfVVHdSguGKbK3NS4WOOK6-3vGv3IUYr6UllYZ8Wvp3uMKsBQo3rEbgF1Vi8uLAaaGRsBUQiejDJN-IlaB-nWytpj5wT~XNMptN~sh6SMqetjfRMZGo9Bp8fR-ogXQ-FsrrXdNV4SloUXFJ2TwfHKOECkz-ssaC5bjat1IleFWq0gh~EeJmL2mOjfpVtamUQk-OYhfr9arPB-bGqmeRVd9YNQbKr4zj5T5EGjxfSwdEihgoXflSqks5W1jvlPbnCEn-cCzzR1JpD3I~2nsDPatOaAAZa-cTra78ijTK83YITCDXqJNA__')",
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
        root: '#F9F5EB',
        shades: {
          10: '#FFFFFF',
          20: '#000000',
        },
      },
    },
    fontFamily: {
      serif: ['DM Serif Display', 'serif'],
      sans: ['DM Sans', 'sans-serif'],
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
  plugins: [],
};
export default config;
