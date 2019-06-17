import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('char', {length: 255, nullable: false, unique: true} )
  email: string;

  @Column('char', {length: 255, nullable: false})
  password: string;

  @Column('char', {length: 255, nullable: false})
  salt: string;
}