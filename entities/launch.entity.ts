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
  CreateDateColumn,
} from 'typeorm';
import { Passenger } from './passenger.entity';
import { Mission } from './mission.entity';
import { Rocket } from './rocket.entity';
import { LaunchSite } from './site.entity';

@Entity()
export class Launch extends BaseEntity {
  @ObjectIdColumn()
  _id: ObjectID;

  @OneToOne(() => Mission)
  @JoinColumn()
  mission: Mission;

  @ManyToMany(() => Passenger)
  @JoinTable()
  passengers: Passenger[];

  @ManyToOne(type => Rocket, rocket => rocket.launches)
  rocket: Rocket;

  @CreateDateColumn()
  data: Date;

  @OneToOne(type => LaunchSite)
  @JoinColumn()
  launchSite: LaunchSite;
}
