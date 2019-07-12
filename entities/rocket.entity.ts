import {
  Entity,
  Column,
  BaseEntity,
  ObjectIdColumn,
  ObjectID,
} from 'typeorm';

@Entity()
export class Rocket extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  type: string;
}
