import { MDXProvider } from '@mdx-js/react'
import { RootURL } from 'lib'
import { NextSeo } from 'next-seo'
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
      <main className="container prose mx-auto max-w-3xl px-4 pt-16 lg:prose-lg">
        <h1 className="text-center">
          <Widont>{title}</Widont>
        </h1>
        <MDXProvider components={components}>
          <article className="">{children}</article>
        </MDXProvider>
      </main>
      <Footer />
    </>
  )
}
