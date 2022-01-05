import { Entity, Column, OneToMany, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Address } from './address.entity';

@Entity({ name: 'users' })
export class Users extends BaseEntity {

  @Column({ type: 'varchar', length: 100, unique: true })
  username: string;

  @Column({ type: 'varchar', length: 250 })
  password: string;

  @Column({ type: 'varchar', length: 200, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 200 })
  name: string;

  @OneToMany(() => Address, (user_id: Address) => user_id.address)
  
}