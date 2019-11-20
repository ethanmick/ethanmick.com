import { flatten, reduce, sortBy } from 'lodash'
import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import {
  Entities,
  Entity,
  HashtagEntity,
  SymbolEntity,
  Tweet,
  UrlEntity,
  UserEntity
} from '../server/models'

interface TweetTextProps {
  entities: Entities
  text: string
}

const urlForEntity = (
  entity: UserEntity | UrlEntity | HashtagEntity | SymbolEntity
) => {
  if (entity.key == 'user_mentions') {
    return `https://twitter.com/${(entity as UserEntity).screen_name}`
  } else if (entity.key == 'urls') {
    return (entity as UrlEntity).url
  }
  return ''
}

export const TweetText = ({ text, entities }: TweetTextProps) => {
  const queue = sortBy(
    reduce(
      entities,
      (a: Entity[], v: Entity[], key: string) => [
        ...a,
        ...v.map(d => ({ ...d, key }))
      ],
      []
    ),
    v => v.indices[0]
  )
  let start = 0
  let vals: any = queue.map(entity => {
    const oldstart = start
    start = entity.indices[1]
    return [
      text.substring(oldstart, entity.indices[0]),
      <a className="text-blue-500 hover:underline" href={urlForEntity(entity)}>
        {text.substring(entity.indices[0], entity.indices[1])}
      </a>
    ]
  })
  vals = flatten(vals)
  vals.push(text.substring(start))

  return <>{vals}</>
}

export const TweetCard = (tweet: Tweet) => {
  let { text, entities } = tweet
  return (
    <div className="flex">
      <div className="p-4">
        <i className="fab fa-twitter fa-2x" style={{ color: '#1DA1F2' }} />
      </div>
      <div>
        <div className="tweetbody">
          <TweetText text={text} entities={entities} />
        </div>
        <Link href={`/tweet/${tweet.id}`}>
          <a className="text-xs hover:underline">
            {moment(tweet.createdAt).format('MMM Do, YYYY')}
          </a>
        </Link>
      </div>
    </div>
  )
}
