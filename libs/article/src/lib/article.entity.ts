import {
  Entity,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ArticleEntity extends BaseEntity {
  @Column({
    type: 'text',
    unique: true,
    primary: true,
    nullable: false,
  })
  slug!: string;

  @Column({
    type: 'integer',
    default: 0,
  })
  views!: number;

  @Column({
    type: 'integer',
    default: 0,
  })
  likes!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
