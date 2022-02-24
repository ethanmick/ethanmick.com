import { ChevronLeftIcon } from '@heroicons/react/outline'
import { MDXProvider } from '@mdx-js/react'
import { Routes } from 'lib'
import Link from 'next/link'
import { EmailSignup } from '../email-signup'
import { Footer } from '../footer'
import { Header } from '../header'
import { Code } from '../mdx'
import { Widont } from '../widont'

export interface PostProps {
  children: React.ReactNode
  title: string
}

const components = {
  pre: (props: any) => <div {...props} />,
  code: Code,
}

export const Layout = ({ children, title }: PostProps) => (
  <>
    <Header />
    <main className="container prose mx-auto max-w-3xl px-4 pt-16 prose-a:text-blue-600 lg:prose-lg">
      <Link href={Routes.React}>
        <a className="flex flex-initial shrink items-center p-2">
          <ChevronLeftIcon className="h-6 w-6 min-w-fit" />
          Back to guide home
        </a>
      </Link>
      <article className="prose mb-40 lg:prose-lg">
        <MDXProvider components={components}>
          <h1 className="pt-8 text-center">
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
