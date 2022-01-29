import { MDXProvider } from '@mdx-js/react'
import { NextSeo } from 'next-seo'
import { Footer } from './footer'
import { Header } from './header'
import { Code } from './mdx'

const components = {
  pre: (props: any) => <div {...props} />,
  code: Code,
}

type RefProps = {
  title: string
  slug: string
  description: string
  children: React.ReactNode
}

export const Ref = ({ children, title, slug, description }: RefProps) => {
  return (
    <>
      <NextSeo
        title={title}
        openGraph={{
          title: title,
          url: `/ref/${slug}`,
          description,
          type: 'article',
          article: {
            authors: ['Ethan Mick'],
          },
        }}
      />
      <Header />
      <main className="container prose mx-auto max-w-3xl px-4 pt-16 lg:prose-lg">
        <h1 className="text-center">{title}</h1>
        <MDXProvider components={components}>
          <article className="">{children}</article>
        </MDXProvider>
        <Footer />
      </main>
    </>
  )
}
