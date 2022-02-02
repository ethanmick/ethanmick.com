import * as Fathom from 'fathom-client'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Router } from 'next/router'
import React, { useEffect } from 'react'
import '../styles/globals.css'

Router.events.on('routeChangeComplete', () => {
  Fathom.trackPageview()
})

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Fathom.load('JVRRQIEZ', {
      includedDomains: ['ethanmick.com'],
      url: 'https://reassuring-champ.ethanmick.com/script.js',
    })
  }, [])

  new Array(5).fill(void 0)

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <DefaultSeo
        title="Ethan Mick"
        description="Personal blog of Ethan Mick"
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
