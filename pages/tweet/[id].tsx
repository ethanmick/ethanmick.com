import fetch from 'isomorphic-unfetch'
import { NextPageContext } from 'next'
import React from 'react'
import { Footer, Title, TweetCard } from '../../components'
import { Tweet } from '../../server/models'

interface TweetPageProps {
  tweet: Tweet
}

const TweetPage = ({ tweet }: TweetPageProps) => {
  return (
    <div className="container mx-auto max-w-3xl px-4">
      <Title className="p-16" />
      <TweetCard {...(tweet as any)} />
      <Footer />
    </div>
  )
}

TweetPage.getInitialProps = async ({
  query
}: NextPageContext): Promise<TweetPageProps> => {
  const { id } = query
  const res = await fetch(`http://localhost:3000/api/tweet/${id}`)
  const tweet = await res.json()
  return { tweet }
}

export default TweetPage
