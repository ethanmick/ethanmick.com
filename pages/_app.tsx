import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <DefaultSeo
        title="Ethan Mick"
        description="Personal blog of Ethan Mick"
        canonical="https://ethanmick.com"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://ethanmick.com/',
          site_name: 'Ethan Mick',
        }}
        twitter={{
          handle: '@Ethan_Mick',
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
