import { MDXProvider } from '@mdx-js/react'
import Head from 'next/head'
import React from 'react'
import { Footer } from './Footer'
import PostCode from './PostCode'
import { Title } from './Title'

const components = {
  pre: (props: any) => <div {...props} />,
  code: PostCode
}

export default (meta: any) => ({ children }: any) => (
  <MDXProvider components={components}>
    <Head>
      <title>{`${meta.title} | Ethan Mick`}</title>
    </Head>
    <div className="container mx-auto max-w-3xl px-4">
      <Title className="p-16" />
      <MDXProvider components={components}>
        <article className="post">{children}</article>
      </MDXProvider>
      <Footer />
    </div>
  </MDXProvider>
)
