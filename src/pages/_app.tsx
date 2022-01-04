import React from 'react'

import App, { AppContext, AppProps } from 'next/app'

import 'tailwindcss/tailwind.css'

const WrappedApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

WrappedApp.getInitialProps = async (appContext: AppContext) => ({
  ...(await App.getInitialProps(appContext))
})

export default WrappedApp
