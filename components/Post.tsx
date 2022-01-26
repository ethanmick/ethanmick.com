import { MDXProvider } from '@mdx-js/react'
import { Head } from 'next/document'
import { Footer } from './footer'
import PostCode from './post-code'
import { Title } from './title'

export interface PostProps {
  children: any
  meta: any
}

const components = {
  pre: (props: any) => <div {...props} />,
  code: PostCode
}

export const Post = ({ children, meta }: PostProps) => (
  <>
    <Head>
      <title>{meta.title}</title>
    </Head>
    <div className="container mx-auto max-w-3xl px-4">
      <Title className="p-16" />
      <MDXProvider components={components}>
        <article className="post">{children}</article>
      </MDXProvider>
      <Footer />
    </div>
  </>
)
