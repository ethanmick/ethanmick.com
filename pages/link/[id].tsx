import { NextPageContext } from 'next'
import React from 'react'
import { Footer, LinkCard, Title } from '../../components'
import { Link } from '../../server/models'
import { json } from '../../utils/api'

interface LinkPageProps {
  link: Link
}

const LinkPage = ({ link }: LinkPageProps) => {
  return (
    <div className="container mx-auto max-w-3xl px-4">
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
