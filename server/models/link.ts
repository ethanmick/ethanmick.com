import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Types } from '../../utils/types'

@Entity('links')
export class Link extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  link: string

  @Column()
  title?: string

  @Column()
  author?: string

  @Column({ name: 'date_published' })
  datePublished?: string

  @Column({ name: 'lead_image_url' })
  leadImageUrl?: string

  @Column()
  domain: string

  @Column()
  read: boolean

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  static async findForFeed() {
    const found = await this.createQueryBuilder('links')
      .where({ read: true })
      .limit(50)
      .getMany()
    return found.map(d => ({ ...d, type: Types.Link }))
  }
}
