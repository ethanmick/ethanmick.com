import moment from 'moment'
import Link from 'next/link'
import * as React from 'react'
import { Types } from '../../utils/types'
import { CommentCard } from './CommentCard'
import { LinkCard } from './LinkCard'
import { MagicRankCard } from './MagicRankCard'
import { PictureCard } from './PictureCard'
import { PostCard } from './PostCard'
import { StarCard } from './StarCard'
import { TweetCard } from './TweetCard'

export interface CardProps {
  icon: any
  title?: any
  body?: any
  footer: any
}

export const asCard = ({ icon, title, body, footer }: CardProps) => {
  return (
    <div className="flex">
      <div className="px-2 md:px-4 mt-1">{icon}</div>
      <div className="flex flex-col">
        {title && <div className="flex items-baseline text-xl">{title}</div>}
        {body}
        {footer}
      </div>
    </div>
  )
}

export interface CardFooterProps {
  href: string
  as?: string
  date: string | Date | moment.Moment
}

export const CardFooter = ({ href, as, date }: CardFooterProps) => (
  <Link href={href} as={as}>
    <a className="text-xs hover:underline">
      {moment(date).format('MMM Do, YYYY')}
    </a>
  </Link>
)

export interface CardIconProps {
  icon: string
  color?: string
}

export const CardIcon = ({ icon, color }: CardIconProps) => (
  <i className={`fa-1x md:fa-2x fa-fw ${icon} ${color}`} />
)

export const Card = (props: any) => (
  <div className={props.className}>
    {props.type == Types.Star && <StarCard {...props} />}
    {props.type == Types.Link && <LinkCard {...props} />}
    {props.type == Types.Post && <PostCard {...props} />}
    {props.type == Types.Tweet && <TweetCard {...props} />}
    {props.type == Types.MagicRank && <MagicRankCard {...props} />}
    {props.type == Types.Comment && <CommentCard {...props} />}
    {props.type == Types.Picture && <PictureCard {...props} />}
  </div>
)
