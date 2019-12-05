import React from 'react'
import { MagicRank } from '../../server/models'
import { asCard, CardFooter } from './Card'

export const MagicRankCard = (rank: MagicRank) => {
  const img = rank.rank == 'mythic' ? 'mythic' : `${rank.rank}_t4`
  const icon = (
    <img
      className="icon-1x md:icon-2x"
      src="/public/images/mtg-logo.png"
      alt="MTG Arena"
    />
  )
  const body = (
    <div className="flex items-center">
      <div className="text-gray-900">
        Achieved rank {rank.rank} in MTG Arena.
      </div>
      <img
        src={`https://gg-mirari.s3.amazonaws.com/ranks/constructed/${img}.png`}
        className="ml-2 w-8 h-8"
      />
    </div>
  )
  const footer = (
    <CardFooter
      href="/mtg/rank/[id]"
      as={`/mtg/rank/${rank.id}`}
      date={rank.createdAt}
    />
  )
  return asCard({ icon, body, footer })
}
