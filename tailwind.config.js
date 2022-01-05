// TODO: look for ways to use StyledComponents global theme with Tailwind

module.exports = {
  purge: ['./src/**/*.{ts,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      primary: {
        light: 'var(--f-color--primary-light)',
        DEFAULT: 'var(--f-color--primary)',
        dark: 'var(--f-color--primary-dark)',
      },
      secondary: {
        light: 'var(--f-color--secondary-light)',
        DEFAULT: 'var(--f-color--secondary)',
        dark: 'var(--f-color--secondary-dark)',
      },
      white: '#fff'
    },
    extend: {},
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1280px'
    },
    fontFamily: {
      sans: ['var(--f-typography--primary)', 'sans-serif'],
      serif: ['var(--f-typography--secondary)', 'serif'],
    },
    fontSize: {
      xs: 'var(--f-fontSize--xs)',
      sm: 'var(--f-fontSize--sm)',
      base: 'var(--f-fontSize--base)',
      lg: 'var(--f-fontSize--lg)',
      xl: 'var(--f-fontSize--xl)',
      '2xl': 'var(--f-fontSize--2xl)',
      '3xl': 'var(--f-fontSize--3xl)',
      '4xl': 'var(--f-fontSize--4xl)',
      '5xl': 'var(--f-fontSize--5xl)',
      '6xl': 'var(--f-fontSize--6xl)',
    },
    fontWeight: {
      regular: 'var(--f-fontWeight--normal)',
      semibold: 'var(--f-fontWeight--semiBold)',
      bold: 'var(--f-fontWeight--bold)'
    },
    lineHeight: {
      tight: 'var(--f-lineHeight--tight)',
      snug: 'var(--f-lineHeight--snug)',
      normal: 'var(--f-lineHeight--normal)',
      relaxed: 'var(--f-lineHeight--relaxed)',
      loose: 'var(--f-lineHeight--loose)',
      '3': 'var(--f-lineHeight--3)',
      '4': 'var(--f-lineHeight--4)',
      '5': 'var(--f-lineHeight--5)',
      '6': 'var(--f-lineHeight--6)',
      '7': 'var(--f-lineHeight--7)',
      '8': 'var(--f-lineHeight--8)',
      '9': 'var(--f-lineHeight--9)',
      '10': 'var(--f-lineHeight--10)',
    }
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      pointerEvents: ['disabled']
    }
  },
  plugins: []
}
