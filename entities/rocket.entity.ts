import {
  Entity,
  Column,
  BaseEntity,
  ObjectIdColumn,
  ObjectID,
  OneToMany,
} from 'typeorm';
import { Launch } from './launch.entity';
import { Mission } from './mission.entity';

@Entity()
export class Rocket extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  type: string;

  @OneToMany(type => Launch, launch => launch.rocket)
  launches: Array<Launch>

  @OneToMany(type => Mission, mission => mission.rocket)
  missions: Array<Mission>
}
