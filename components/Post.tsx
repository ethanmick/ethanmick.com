import React from 'react'
import { MDXProvider } from '@mdx-js/react'

export interface PostProps {
  children: any
}

const components = {
  pre: (props: any) => <div {...props} />,
  code: (props: any) => <pre style={{ color: 'tomato' }} {...props} />
}

export const Post = ({ children }: PostProps) => (
  <MDXProvider components={components}>
    <article>{children}</article>
  </MDXProvider>
)
