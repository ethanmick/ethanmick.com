import { NextPageContext } from 'next'
import React from 'react'
import { Footer, StarCard, Title } from '../../components'
import { Star } from '../../server/models'
import { json } from '../../utils/api'

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
  const star = await json(`star/${id}`)
  return { star }
}

export default StarPage
