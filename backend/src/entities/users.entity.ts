import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('char', {length: 255})
  login: string;

  @Column('char', {length: 255})
  password: string;
}