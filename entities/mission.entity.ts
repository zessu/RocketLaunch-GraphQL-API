import {
  Entity,
  Column,
  BaseEntity,
  ObjectIdColumn,
  ObjectID
} from 'typeorm';

@Entity()
export class Mission extends BaseEntity {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  description: string;
}
