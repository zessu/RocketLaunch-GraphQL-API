import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  JoinTable,
  ManyToMany
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

  @OneToOne(() => Mission)
  @JoinColumn()
  mission: Mission;

  @OneToOne(() => Rocket)
  @JoinColumn()
  rocket: Rocket;

  @Column()
  isBooked: Boolean;

  @ManyToMany(() => Passenger)
  @JoinTable()
  passengers: Passenger[];
}
