import React from 'react'

import Anchor from 'next/link'

type TLink = {
  children: React.ReactNode
  to: string
  className?: string
  target?: string
  rel?: string
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

const Link = ({
  to = '/',
  children,
  target,
  rel,
  className,
  onClick
}: TLink) => {
  return (
    <Anchor href={to}>
      <a className={className} target={target} rel={rel} onClick={onClick}>
        {children}
      </a>
    </Anchor>
  )
}

export default Link
