import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Types } from '../../utils/types'

@Entity('magic_ranks')
export class MagicRank extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  rank: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  static async findForFeed(limit = 50) {
    const found = await this.createQueryBuilder('magic_ranks')
      .limit(limit)
      .getMany()
    return found.map(d => ({ ...d, type: Types.MagicRank }))
  }
}
