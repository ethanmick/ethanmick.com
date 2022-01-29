import { MDXProvider } from '@mdx-js/react'
import { Layout } from './layout'
import { Code } from './mdx/'
import { Title } from './title'

export interface PostProps {
  children: any
  meta: any
}

const components = {
  pre: (props: any) => <div {...props} />,
  code: Code,
}

export const Post = ({ children }: PostProps) => (
  <>
    <Layout>
      <Title className="p-16" />
      <MDXProvider components={components}>
        <article className="post">{children}</article>
      </MDXProvider>
    </Layout>
  </>
)
