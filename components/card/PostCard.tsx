import Link from 'next/link'
import React from 'react'
import { asCard, CardFooter, CardIcon } from './Card'

export interface PostCardProps {
  title: string
  slug: string
  excerpt?: string
  createdAt: string
}

export const PostCard = ({
  title,
  slug,
  excerpt,
  createdAt
}: PostCardProps) => {
  const icon = <CardIcon icon="fad fa-rss" color="text-orange-500" />
  const cardTitle = (
    <Link href={`/post/${slug}`}>
      <a className="font-bold text-blue-500 hover:underline">{title}</a>
    </Link>
  )
  const body = excerpt && <div>{excerpt}</div>
  const footer = <CardFooter href={`/post/${slug}`} date={createdAt} />
  return asCard({ icon, body, title: cardTitle, footer })
}
