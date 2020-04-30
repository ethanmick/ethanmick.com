import {
  BaseEntity,
  Column,
  Entity,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm'
import { Types } from '../../utils/types'

@Entity('stars')
export class Star extends BaseEntity {
  @PrimaryColumn()
  id: number

  @Column()
  name: string

  @Column()
  owner: string

  @Column({ name: 'full_name' })
  fullName: string

  @Column()
  description: string

  @Column()
  url: string

  @Column()
  language?: string

  @Column()
  forks: number

  @Column({ name: 'stargazers_count' })
  stargazersCount: number

  @Column({ name: 'last_updated_at' })
  lastUpdatedAt: Date

  @Column({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  static async findForFeed(limit = 50) {
    const found = await this.createQueryBuilder('star')
      .orderBy('created_at', 'DESC')
      .limit(limit)
      .getMany()
    return found.map((d) => ({ ...d, type: Types.Star }))
  }
}
