import 'reflect-metadata'
import { createConnection, getConnection } from 'typeorm'
import { Link } from './link'
import { MagicRank } from './magic_rank'
import { Post } from './post'
import { Star } from './star'
import { Tweet } from './tweet'

createConnection({
  type: process.env.TYPEORM_CONNECTION as any,
  url: process.env.TYPEORM_URL,
  database: process.env.TYPEORM_DATABASE,
  entities: [Post, Link, MagicRank, Star, Tweet],
  logging: false
})

export const connection = getConnection
export * from './link'
export * from './magic_rank'
export * from './post'
export * from './star'
export * from './tweet'