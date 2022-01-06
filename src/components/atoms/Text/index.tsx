import styled from 'styled-components'

import theme from '../../../styles/theme'

interface TProps {
  as?: string
  variant?: 'lg' | 'md' | 'sm' | 'xs' | 'xl' | string
  textColor?: string
  margin?: string
  bold?: boolean
  semiBold?: boolean
  transform?:
    | 'none'
    | 'capitalize'
    | 'uppercase'
    | 'lowercase'
    | 'initial'
    | 'inherit'
  fontFamily?: 'primary' | 'secondary'
  lineHeight?: string
}

export const getClassesByVariant = (variant?: string) => {
  switch (variant) {
    case 'lg':
      return 'leading-normal text-base md:text-xl font-normal'

    case 'md':
      return 'leading-loose text-lg'

    case 'sm':
      return 'leading-3 text-sm'

    case 'xs':
      return 'leading-snug text-xs font-normal'

    case 'xl':
      return 'leading-5 text-lg md:text-xl font-normal'

    default:
      return 'leading-normal text-base font-normal'
  }
}

const Text = styled.div.attrs<TProps>(({ variant }) => ({
  className: getClassesByVariant(variant)
}))`
  color: ${({ textColor }: TProps) => textColor || theme.colors.primaryDark};
  margin: ${({ margin }: TProps) => margin};
  line-height: ${({ lineHeight }: TProps) => lineHeight};
  text-transform: ${({ transform }: TProps) => transform};
  font-weight: ${({ bold, semiBold }: TProps) =>
    (bold || semiBold) && theme.fontWeight[bold ? 'bold' : 'semiBold']};
  font-family: ${({ fontFamily }: TProps) =>
    theme.typography[fontFamily ? fontFamily : 'primary']};
  padding: 0px;
  white-space: pre-wrap;
  box-sizing: border-box;
`

export default Text
