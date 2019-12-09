import { NextPageContext } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'
import { Footer, MagicRankCard, Title } from '../../../components'
import { MagicRank } from '../../../server/models'
import { json, title, url } from '../../../utils'

interface MagicRankPageProps {
  rank: MagicRank
}

const MagicRankPage = ({ rank }: MagicRankPageProps) => {
  return (
    <div className="container mx-auto max-w-3xl px-4">
      <NextSeo
        title={title(`Achieved Rank ${rank.rank}`)}
        openGraph={{
          url: url(`/mtg/rank/${rank.id}`)
        }}
      />
      <Title className="p-16" />
      <MagicRankCard {...(rank as any)} />
      <Footer />
    </div>
  )
}

MagicRankPage.getInitialProps = async ({
  query
}: NextPageContext): Promise<MagicRankPageProps> => {
  const { id } = query
  const rank = await json(`rank/${id}`)
  return { rank }
}

export default MagicRankPage
