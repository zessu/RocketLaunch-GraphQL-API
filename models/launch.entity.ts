import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  JoinTable
} from 'typeorm';
import { Passenger } from './passenger.entity';
import { Mission } from './mission.entity';
import { Rocket } from './rocket.entity';

@Entity()
export class Launch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  site: string;

  @OneToOne(type => Mission)
  @JoinColumn()
  mission: Mission;

  @OneToOne(type => Rocket)
  @JoinColumn()
  rocket: Rocket;

  @Column()
  isBooked: Boolean;

  @ManyToOne(type => Passenger, passenger => passenger.trips)
  @JoinTable()
  passengers: Array<Passenger>;
}
