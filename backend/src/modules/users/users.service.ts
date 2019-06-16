import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository, InsertResult } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private readonly users: Repository<Users>){}

  public async login(): Promise<Users[]>{
    return await this.users.find();
  }

  public async register(): Promise<InsertResult>{
    return await this.users.insert({
      login: "Bartek",
      password: "123456"
    });
  }
}
