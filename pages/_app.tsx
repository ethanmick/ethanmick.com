import { DefaultSeo } from 'next-seo'
import App from 'next/app'
import React from 'react'
import '../styles/index.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <DefaultSeo
          title="Ethan Mick"
          description="Personal blog of Ethan Mick"
          canonical="https://ethanmick.com"
          openGraph={{
            type: 'website',
            locale: 'en_US',
            url: 'https://ethanmick.com/',
            site_name: 'Ethan Mick'
          }}
          twitter={{
            handle: '@Ethan_Mick'
          }}
        />
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
