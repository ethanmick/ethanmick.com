import { MDXProvider } from '@mdx-js/react'
import { Footer } from './footer'
import { Header } from './header'
import { Code } from './mdx'
import { Widont } from './widont'

export interface PostProps {
  children: React.ReactNode
  title: string
}

const components = {
  pre: (props: any) => <div {...props} />,
  code: Code,
}

export const Post = ({ children, title }: PostProps) => (
  <>
    <Header />
    <main className="container prose mx-auto max-w-3xl px-4 pt-16 lg:prose-lg">
      <h1 className="text-center">
        <Widont>{title}</Widont>
      </h1>
      <MDXProvider components={components}>
        <article>{children}</article>
      </MDXProvider>
      <Footer />
    </main>
  </>
)
