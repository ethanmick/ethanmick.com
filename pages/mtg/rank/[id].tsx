import fetch from 'isomorphic-unfetch'
import { NextPageContext } from 'next'
import React from 'react'
import { Footer, MagicRankCard, Title } from '../../../components'
import { MagicRank } from '../../../server/models'

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
  const res = await fetch(`http://localhost:3000/api/rank/${id}`)
  const rank = await res.json()
  return { rank }
}

export default MagicRankPage
