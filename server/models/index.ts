import 'reflect-metadata'
import { createConnection, getConnection } from 'typeorm'
import { database } from '../config'
import { Comment } from './comment'
import { Link } from './link'
import { MagicRank } from './magic_rank'
import { Picture } from './picture'
import { Star } from './star'
import { Tweet } from './tweet'

createConnection({
  ...database,
  entities: [Comment, Link, MagicRank, Star, Tweet, Picture]
} as any).catch((err) => {
  console.log('Error connecting to database:', err)
  process.exit(1)
})

export const connection = getConnection
export * from './comment'
export * from './link'
export * from './magic_rank'
export * from './picture'
export * from './star'
export * from './tweet'
