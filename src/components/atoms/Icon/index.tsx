import { useMemo } from 'react'

import sources from './sources'
import { Container } from './styles'

type TIcon = {
  className?: string
  name: keyof typeof sources
  color?: string
  margin?: string
  size?: number
  hoverColor?: string
  cursor?: 'pointer' | 'default ' | string
  onClick?: (arg: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Icon = ({
  color,
  name,
  size = 24,
  className,
  onClick,
  ...props
}: TIcon) => {
  const Component = useMemo(() => sources[name], [name])

  return (
    <Container onClick={onClick} className={className} {...props}>
      <Component {...{ color, size }} />
    </Container>
  )
}

export default Icon
