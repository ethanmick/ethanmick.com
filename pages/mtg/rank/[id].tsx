import { NextPageContext } from 'next'
import React from 'react'
import { Footer, MagicRankCard, Title } from '../../../components'
import { MagicRank } from '../../../server/models'
import { json } from '../../../utils/api'

interface MagicRankPageProps {
  rank: MagicRank
}

const MagicRankPage = ({ rank }: MagicRankPageProps) => {
  return (
    <div className="container mx-auto max-w-3xl px-4">
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
