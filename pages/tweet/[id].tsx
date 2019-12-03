import { NextPageContext } from 'next'
import React from 'react'
import { Footer, Title, TweetCard } from '../../components'
import { Tweet } from '../../server/models'
import { json } from '../../utils/api'

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
  const tweet = await json(`tweet/${id}`)
  return { tweet }
}

export default TweetPage
