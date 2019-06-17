import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository, InsertResult, FindConditions } from 'typeorm';
import { SaltedCredentials } from '../auth/lib/salted.credentials.model';
import { from, Observable } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private readonly users: Repository<Users>){}

  public create(credentials: SaltedCredentials): Observable<InsertResult>{
      return from(this.users.insert(credentials));
  }

  public getOne(conditions: FindConditions<Users>): Observable<Users>{
    return from( this.users.findOneOrFail({where: conditions}) );
  }
}
