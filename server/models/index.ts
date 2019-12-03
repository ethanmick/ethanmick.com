import 'reflect-metadata'
import { createConnection, getConnection } from 'typeorm'
import { database } from '../config'
import { Link } from './link'
import { MagicRank } from './magic_rank'
import { Star } from './star'
import { Tweet } from './tweet'

createConnection({
  ...database,
  entities: [Link, MagicRank, Star, Tweet]
} as any)

export const connection = getConnection
export * from './link'
export * from './magic_rank'
export * from './star'
export * from './tweet'
