import moment from 'moment'
import Link from 'next/link'
import * as React from 'react'
import { Link as LinkModel, MagicRank, Post, Star } from '../server/models'
import { Types } from '../utils/types'
import { TweetCard } from './TweetCard'

export const Card = (props: any) => (
  <div className={props.className}>
    {props.type == Types.Star && <StarCard {...props} />}
    {props.type == Types.Link && <LinkCard {...props} />}
    {props.type == Types.Post && <PostCard {...props} />}
    {props.type == Types.Tweet && <TweetCard {...props} />}
    {props.type == Types.MagicRank && <MagicRankCard {...props} />}
  </div>
)

export const StarCard = (star: Star) => (
  <div className="flex">
    <div className="p-4">
      <i className="fa-2x fad fa-star text-green-500 fa-fw" />
    </div>
    <div className="flex flex-col">
      <div className="flex items-baseline">
        <a
          className="text-blue-500 hover:underline"
          href={`https://github.com/${star.fullName}`}
          target="_blank"
        >
          {star.owner} / <span className="font-bold">{star.name}</span>
        </a>
      </div>
      <div className="text-xs">{star.description}</div>
      <Link href={`/star/${star.id}`}>
        <a className="text-xs hover:underline">
          {moment(star.createdAt).format('MMM Do, YYYY')}
        </a>
      </Link>
    </div>
  </div>
)

export const LinkCard = (link: LinkModel) => (
  <div className="flex">
    <div className="p-4">
      <i className="text-indigo-500 fa-2x fad fa-link fa-fw" />
    </div>
    <div className="flex flex-col">
      <div className="flex items-baseline">
        <a
          className="font-bold text-blue-500 hover:underline"
          href={link.link}
          target="_blank"
        >
          {link.title}
        </a>
        <a
          href={link.domain}
          target="_blank"
          className="ml-2 text-gray-600 text-xs hover:underline"
        >
          ({link.domain})
        </a>
      </div>
      <Link href={`/link/${link.id}`}>
        <a className="text-xs hover:underline">
          {moment(link.createdAt).format('MMM Do, YYYY')}
        </a>
      </Link>
    </div>
  </div>
)

export const PostCard = ({ title, slug, excerpt, createdAt }: Post) => (
  <div className="flex">
    <div className="p-4">
      <i className="fad fa-rss fa-2x text-orange-500 fa-fw" />
    </div>
    <div className="flex flex-col">
      <Link href={`/post/${slug}`}>
        <a className="font-bold text-blue-500 hover:underline">{title}</a>
      </Link>
      <div className="text-xs">{excerpt}</div>
      <Link href={`/post/${slug}`}>
        <a className="text-xs hover:underline">
          {moment(createdAt).format('MMM Do, YYYY')}
        </a>
      </Link>
    </div>
  </div>
)

export const MagicRankCard = (rank: MagicRank) => (
  <div className="flex">
    <div className="p-4">
      <img
        src="/public/images/mtg-logo.png"
        alt="MTG Arena"
        style={{ width: '40px', height: '40px' }}
      />
    </div>
    <div className="flex flex-col">
      <div className="flex items-center">
        <div className="text-gray-900">
          Achieved rank {rank.rank} in MTG Arena.
        </div>
        <img
          src="https://gg-mirari.s3.amazonaws.com/ranks/constructed/diamond_t4.png"
          className="ml-2 w-8 h-8"
        />
      </div>
      <Link href={`/mtg/rank/${rank.id}`}>
        <a className="text-xs hover:underline">
          {moment(rank.createdAt).format('MMM Do, YYYY')}
        </a>
      </Link>
    </div>
  </div>
)
