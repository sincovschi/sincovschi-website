import { Column, Model, Table, DataType } from 'sequelize-typescript';
import {} from '@nestjs/sequelize';

@Table
export class Article extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id!: string;

  @Column({
    type: DataType.STRING,
    primaryKey: true,
  })
  slug!: string;

  @Column({
    type: DataType.NUMBER,
    defaultValue: 0,
  })
  views!: boolean;

  @Column({
    type: DataType.NUMBER,
    defaultValue: 0,
  })
  likes!: boolean;
}
