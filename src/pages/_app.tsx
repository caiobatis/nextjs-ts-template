import React from 'react'

import App, { AppContext, AppProps } from 'next/app'

import 'tailwindcss/tailwind.css'
import { Theme } from 'atoms'

const WrappedApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  )
}

WrappedApp.getInitialProps = async (appContext: AppContext) => ({
  ...(await App.getInitialProps(appContext))
})

export default WrappedApp
