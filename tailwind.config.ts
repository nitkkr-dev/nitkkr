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
      backgroundImage: {
        notifications:
          "linear-gradient(rgba(249, 245, 235, 0.6) 0%, rgba(249, 245, 235, 0.8) 85%, rgba(249, 245, 235, 1) 100%), url('https://s3-alpha-sig.figma.com/img/cff6/b90c/6d452f4caad45a22f4d4a701c7b48bce?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ofq9jEHFupykPfqgRBlvqj9sHSFZppT4~Bc67eBYuraZ7BWV56CCOl~KksgPTIMTXaatC~DicUIdW1kEa1EnF6QypCyAnO-wXXL90qqlDLz-1DHcUT0rwCoXIwvyHtm8y9mWqTXVJeR7KFXf5zdH0hvwBo6rzstqgbSplXgGSKJtKhGPntPkPefW3kCX09i4XYj7TmL7KVmtcWOKFAUGgsvb2zhJ-9wBGgAXId1Uf-LGpeskNzO7SylQ1TVAQwvoZgrgJeeI1kO0OE0vcfAKR3Jut~kjMKYWay4owWif2Owy1LxhMi3uwZ9LOXr1E8VlE6i5iwLrVyaZdS5I2ZnSHA__')",
        studentActivities:
          "url('https://s3-alpha-sig.figma.com/img/517c/938c/4f33a5d7314ae27b1f5889ad51bef040?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kompE3PGAJZpl95XpJ80kR~4JBG40bM-uUhl0-O3K0k0QXk~CzNZUxJHItS4CRM1h0BS0EL-5xdNi6xkIFamIFTUviKykzfuJU~uLuuQ~RF7eGn-E1EEdmQS~E2PExM2oj~UfUTqrNNt70~doCAdaHhMshJcIIIF2KLwkQWfrLltqR7QwsYkxTdFj84qBcRnIh~V9ngs0MKHysj6F8MPiRY15qRQP1cWlHUQToyEORyzQ-RVbdCbxGeV4WwOojk0gtb~7s3TNK4ycePpM9n6ODrMRcrnBaalvLQLxWY6DGrp-QRBEx6gyEQmbpRkyf3vCpp-oMRbSOCrqxwxhOqyWg__')",
      },
    },
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
      serif: ['DM Serif Display', 'serif'],
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
} satisfies Config;
