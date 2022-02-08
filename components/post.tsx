import { MDXProvider } from '@mdx-js/react'
import { EmailSignup } from './email-signup'
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
      <article className="prose mx-auto mb-40 prose-a:text-blue-600 lg:prose-lg">
        <MDXProvider components={components}>
          <h1 className="text-center">
            <Widont>{title}</Widont>
          </h1>
          {children}
        </MDXProvider>
      </article>
      <EmailSignup />
    </main>
    <Footer />
  </>
)
