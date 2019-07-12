import { Column, ManyToMany, Entity, BaseEntity, ObjectIdColumn, ObjectID } from 'typeorm';
import { Launch } from './launch.entity';

@Entity()
export class Passenger extends BaseEntity {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  email: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  password: string;

  @ManyToMany(() => Launch)
  trips: Launch[];
}
