import React from 'react'

import { ApolloProvider } from '@apollo/client'
import App, { AppContext, AppProps } from 'next/app'

import { Theme } from 'atoms'
import services from 'services'

import 'tailwindcss/tailwind.css'

const WrappedApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Theme>
      <ApolloProvider client={services.api.client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Theme>
  )
}

WrappedApp.getInitialProps = async (appContext: AppContext) => ({
  ...(await App.getInitialProps(appContext))
})

export default WrappedApp
