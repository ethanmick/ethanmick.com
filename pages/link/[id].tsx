import { NextPageContext } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'
import { Footer, LinkCard, Title } from '../../components'
import { Link } from '../../server/models'
import { json, title, url } from '../../utils'

interface LinkPageProps {
  link: Link
}

const LinkPage = ({ link }: LinkPageProps) => {
  const titl = title(link.title)
  return (
    <div className="container mx-auto max-w-3xl px-4">
      <NextSeo
        title={titl}
        openGraph={{
          url: url(`/link/${link.id}`)
        }}
      />
      <Title className="p-16" />
      <LinkCard {...(link as any)} />
      <Footer />
    </div>
  )
}

LinkPage.getInitialProps = async ({
  query
}: NextPageContext): Promise<LinkPageProps> => {
  const { id } = query
  const link = await json(`link/${id}`)
  return { link }
}

export default LinkPage
