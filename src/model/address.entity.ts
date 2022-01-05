import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Users } from './users.entity'

@Entity({ name: 'address' })
export class Address extends BaseEntity {

  @ManyToOne(() => Users, (user_id: Users) => user_id.id)
  user_id: Users;

  @Column({ type: 'text' })
  address: string;

  @Column({ type: 'varchar', length: 200 })
  city: string;
}