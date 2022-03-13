import { MDXProvider } from '@mdx-js/react'
import 'asciinema-player/dist/bundle/asciinema-player.css'
import { Code } from 'components/mdx'
import * as Fathom from 'fathom-client'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Router } from 'next/router'
import React, { useEffect } from 'react'
import { Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.css'

const components = {
  pre: ({ children: child }: any) => {
    const { children, className } = child.props
    return <Code className={className}>{children}</Code>
  },
}

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
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
      <ToastContainer hideProgressBar newestOnTop transition={Slide} />
    </>
  )
}

export default MyApp
