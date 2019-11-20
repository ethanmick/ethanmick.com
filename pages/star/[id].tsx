import fetch from 'isomorphic-unfetch'
import { NextPageContext } from 'next'
import React from 'react'
import { Footer, StarCard, Title } from '../../components'
import { Star } from '../../server/models'

interface StarPageProps {
  star: Star
}

const StarPage = ({ star }: StarPageProps) => {
  return (
    <div className="container mx-auto max-w-3xl px-4">
      <Title className="p-16" />
      <StarCard {...(star as any)} />
      <Footer />
    </div>
  )
}

StarPage.getInitialProps = async ({
  query
}: NextPageContext): Promise<StarPageProps> => {
  const { id } = query
  const res = await fetch(`http://localhost:3000/api/star/${id}`)
  const star = await res.json()
  return { star }
}

export default StarPage
