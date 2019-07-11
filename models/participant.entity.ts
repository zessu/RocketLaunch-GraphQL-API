import { PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Launch } from './launch.entity';

export class Participant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @ManyToMany(type => Launch, launch => launch.participants)
  trips: Array<Launch>;
}
