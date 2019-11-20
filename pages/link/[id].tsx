import fetch from 'isomorphic-unfetch'
import { NextPageContext } from 'next'
import React from 'react'
import { Footer, LinkCard, Title } from '../../components'
import { Link } from '../../server/models'

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
  const res = await fetch(`http://localhost:3000/api/link/${id}`)
  const link = await res.json()
  return { link }
}

export default LinkPage
