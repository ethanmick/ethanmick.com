import moment from 'moment'
import Link from 'next/link'
import * as React from 'react'
import { Types } from '../../utils/types'
import { PostCard } from './post-card'

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
    {props.type == Types.Post && <PostCard {...props} />}
  </div>
)
