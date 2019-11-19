import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Types } from '../../utils/types'

@Entity('posts')
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  slug: string

  @Column()
  excerpt: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  static async findForFeed(limit = 50) {
    const found = await this.createQueryBuilder('posts')
      .limit(limit)
      .getMany()
    return found.map(d => ({ ...d, type: Types.Post }))
  }
}
