import {
  BaseEntity,
  Column,
  Entity,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm'
import { Types } from '../../utils/types'

export interface PictureSource {
  src: string
  caption?: string
}

@Entity('pictures')
export class Picture extends BaseEntity {
  @PrimaryColumn()
  id: number

  @Column({ type: 'jsonb' })
  src: PictureSource[]

  @Column({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  static async findForFeed(limit = 50) {
    const found = await this.createQueryBuilder('picture')
      .limit(limit)
      .getMany()
    return found.map(d => ({ ...d, type: Types.Picture }))
  }
}
