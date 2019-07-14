import {
  Entity,
  Column,
  BaseEntity,
  ObjectIdColumn,
  ObjectID,
  ManyToOne
} from 'typeorm';
import { Rocket } from './rocket.entity';

@Entity()
export class Mission extends BaseEntity {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(type => Rocket, rocket => rocket.missions)
  rocket: Rocket;
}
