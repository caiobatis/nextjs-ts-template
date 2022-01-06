import React, { PropsWithChildren } from 'react'

import { ThemeProvider } from 'styled-components'

import theme from '../../../styles/theme'

const Theme = ({
  children
}: PropsWithChildren<{
  //
}>): JSX.Element => {
  return <ThemeProvider {...{ theme }}>{children}</ThemeProvider>
}

export default Theme
