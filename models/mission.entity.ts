import {
  Entity,
  Column,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export class Mission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
