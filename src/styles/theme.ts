import { DefaultTheme } from 'styled-components'

type Color = Record<
  | 'primaryDark'
  | 'primary'
  | 'primaryLight'
  | 'secondaryDark'
  | 'secondary'
  | 'secondaryLight',
  string
>

type FontSizes = Record<
  'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl',
  string
>

type FontWeights = Record<'normal' | 'semiBold' | 'bold', string>

type LineHeights = Record<
  'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs',
  string
>

type Typography = Record<'primary' | 'secondary', string>

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Color
    typography: Typography
    fontSize: FontSizes
    fontWeight: FontWeights
    lineHeight: LineHeights
  }
}

const theme: DefaultTheme = {
  colors: {
    primaryDark: 'var(--f-color--primary-dark)',
    primary: 'var(--f-color--primary)',
    primaryLight: 'var(--f-color--primary-light)',
    secondaryDark: 'var(--f-color--secondary-dark)',
    secondary: 'var(--f-color--secondary)',
    secondaryLight: 'var(--f-color--secondary-light)'
  },
  typography: {
    primary: 'var(--f-typography--primary)',
    secondary: 'var(--f-typography--secondary)'
  },
  fontSize: {
    xxs: 'var(--f-fontSize--xxs)',
    xs: 'var(--f-fontSize--xs)',
    sm: 'var(--f-fontSize--sm)',
    md: 'var(--f-fontSize--md)',
    lg: 'var(--f-fontSize--lg)',
    xl: 'var(--f-fontSize--xl)',
    xxl: 'var(--f-fontSize--xxl)'
  },
  fontWeight: {
    normal: 'var(--f-fontWeight--normal)',
    semiBold: 'var(--f-fontWeight--semiBold)',
    bold: 'var(--f-fontWeight--bold)'
  },
  lineHeight: {
    xxl: 'var(--f-lineHeight--xxl)',
    xl: 'var(--f-lineHeight--xl)',
    lg: 'var(--f-lineHeight--lg)',
    md: 'var(--f-lineHeight--md)',
    sm: 'var(--f-lineHeight--sm)',
    xs: 'var(--f-lineHeight--xs)',
    xxs: 'var(--f-lineHeight--xxs)'
  }
}

export default theme
