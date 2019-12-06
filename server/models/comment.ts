import {
  BaseEntity,
  Column,
  Entity,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm'
import { Types } from '../../utils/types'

@Entity('comments')
export class Comment extends BaseEntity {
  @PrimaryColumn()
  id: number

  @Column()
  body: string

  @Column({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  static async findForFeed(limit = 50) {
    const found = await this.createQueryBuilder('comment')
      .limit(limit)
      .getMany()
    return found.map(d => ({ ...d, type: Types.Comment }))
  }
}
