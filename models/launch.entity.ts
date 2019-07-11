import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  JoinTable
} from 'typeorm';
import { Participant } from './participant.entity';
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

  @ManyToOne(type => Participant, participant => participant.trips)
  @JoinTable()
  participants: Array<Participant>;
}
