import { MDXProvider } from '@mdx-js/react'
import { RootURL } from 'lib'
import { NextSeo } from 'next-seo'
import { EmailSignup } from './email-signup'
import { Footer } from './footer'
import { Header } from './header'
import { Code } from './mdx'
import { Widont } from './widont'

const components = {
  pre: (props: any) => <div {...props} />,
  code: Code,
}

type RefProps = {
  title: string
  slug: string
  description: string
  image?: {
    url: string
  }
  children: React.ReactNode
}

export const Ref = ({
  children,
  title,
  slug,
  description,
  image,
}: RefProps) => {
  return (
    <>
      <NextSeo
        title={title}
        openGraph={{
          title: title,
          url: `${RootURL}/refs/${slug}`,
          images: [
            {
              url: `${RootURL}/${image?.url}`,
            },
          ],
          description,
          type: 'article',
          article: {
            authors: ['Ethan Mick'],
          },
        }}
      />
      <Header />
      <main className="container mx-auto max-w-3xl px-4 pt-16">
        <article className="prose mb-40 lg:prose-lg">
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
}
