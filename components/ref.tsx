import { RootURL } from 'lib'
import { NextSeo } from 'next-seo'
import { EmailSignup } from './email-signup'
import { Footer } from './footer'
import { Header } from './header'
import { Widont } from './widont'

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
          <h1 className="text-center">
            <Widont>{title}</Widont>
          </h1>
          {children}
        </article>
        <EmailSignup />
      </main>
      <Footer />
    </>
  )
}
