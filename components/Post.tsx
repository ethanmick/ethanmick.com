import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import PostCode from './PostCode'
import { Title } from './Title'

export interface PostProps {
  children: any
}

const components = {
  pre: (props: any) => <div {...props} />,
  code: PostCode
}

export const Post = ({ children }: PostProps) => (
  <div className="container mx-auto max-w-3xl">
    <Title className="p-16" />
    <MDXProvider components={components}>
      <article className="post">{children}</article>
    </MDXProvider>
  </div>
)
