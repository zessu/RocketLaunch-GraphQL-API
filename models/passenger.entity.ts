import { PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Launch } from './launch.entity';

export class Passenger {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @ManyToMany(type => Launch, launch => launch.passengers)
  trips: Array<Launch>;
}
