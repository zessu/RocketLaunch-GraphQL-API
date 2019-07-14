import { Entity, ObjectIdColumn, ObjectID, Column, UpdateDateColumn } from 'typeorm';

@Entity()
export class LaunchSite {

  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: String;

  @Column()
  location: String;

  @UpdateDateColumn()
  updated: Date;
}
