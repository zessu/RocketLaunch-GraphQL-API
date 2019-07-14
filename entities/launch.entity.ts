import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  JoinTable,
  ManyToMany,
  BaseEntity,
  ObjectIdColumn,
  ObjectID,
  ManyToOne,
} from 'typeorm';
import { Passenger } from './passenger.entity';
import { Mission } from './mission.entity';
import { Rocket } from './rocket.entity';

@Entity()
export class Launch extends BaseEntity {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  site: string;

  @OneToOne(() => Mission)
  @JoinColumn()
  mission: Mission;

  @Column()
  isBooked: Boolean;

  @ManyToMany(() => Passenger)
  @JoinTable()
  passengers: Passenger[];

  @ManyToOne(type => Rocket, rocket => rocket.launches)
  rocket: Rocket;
}
