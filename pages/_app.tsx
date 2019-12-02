import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import '../styles/index.css'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>Ethan Mick</title>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
