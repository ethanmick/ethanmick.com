import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm'
import { Types } from '../../utils/types'

export interface Entity {
  indices: [number, number]
  key: string
}
export interface UserEntity extends Entity {
  screen_name: string
  name: string
  id_str: string
}

export interface UrlEntity extends Entity {
  display_url: string
  expanded_url: string
  url: string
}

export interface HashtagEntity extends Entity {}

export interface SymbolEntity extends Entity {}

export interface Entities {
  urls: UrlEntity[]
  hashtags: HashtagEntity[]
  symbols: SymbolEntity[]
  user_mentions: UserEntity[]
}

@Entity('tweets')
export class Tweet extends BaseEntity {
  @PrimaryColumn()
  id: string

  @Column()
  text: string

  @Column({ name: 'user_name' })
  userName: string

  @Column({ name: 'user_screen_name' })
  userScreenName: string

  @Column({ type: 'jsonb' })
  entities: Entities

  @Column({ name: 'user_profile_image_url' })
  userProfileImageUrl: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  static async findForFeed(limit = 50) {
    const found = await this.createQueryBuilder('tweet')
      .limit(limit)
      .getMany()
    return found.map(d => ({ ...d, type: Types.Tweet }))
  }
}
