import { MDXProvider } from '@mdx-js/react'
import { NextSeo } from 'next-seo'
import React from 'react'
import { Post, title, url } from '../utils'
import { Footer } from './Footer'
import PostCode from './PostCode'
import { Title } from './Title'

const components = {
  pre: (props: any) => <div {...props} />,
  code: PostCode
}

export default (meta: Post) => ({ children }: any) => (
  <MDXProvider components={components}>
    <NextSeo
      title={title(meta.title)}
      openGraph={{
        title: meta.title,
        url: url(`/post/${meta.slug}`),
        description: meta.excerpt,
        type: 'article',
        article: {
          publishedTime: meta.createdAt,
          authors: [meta.author]
        }
      }}
    />
    <div className="container mx-auto max-w-3xl px-4">
      <Title className="p-16" />
      <MDXProvider components={components}>
        <article className="post">{children}</article>
      </MDXProvider>
      <Footer />
    </div>
  </MDXProvider>
)
