import { JwtService } from '@nestjs/jwt';
import { Injectable, NotAcceptableException, BadRequestException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { Observable } from 'rxjs';
import { Credentials } from './dto/credentials.dto';
import { SaltedCredentials } from './lib/salted.credentials.model';
import { InsertResult } from 'typeorm';
import { map, catchError } from 'rxjs/operators';
import { Users } from '../users/users.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {}

  public signIn(credentials: Credentials): Observable<string> {
    if(!credentials.email || !credentials.password){
      throw new BadRequestException("Email or password empty");
    };

    return this.usersService.getOne({email: credentials.email}).pipe<string>(
      map( (user: Users) => {
        if( user != null && bcrypt.compareSync(credentials.password, user.password) ){
          return this.jwtService.sign({id: user.id});
        }else{
          throw new NotAcceptableException("Email or password incorrect.");
        };
      })
    );
  }

  public signUp(credentials: Credentials): Observable<InsertResult> {
    const saltRounds = 10;
    const generatedSalt = bcrypt.genSaltSync(saltRounds);

    return this.usersService.create(<SaltedCredentials>{
      email: credentials.email,
      password: bcrypt.hashSync(credentials.password, generatedSalt),
      salt: generatedSalt
    });
  }

  public validateUser(credentials: {id: number}): Observable<Users> {
    if(!credentials.id){
      return null;
    }

    return this.usersService.getOne({id: credentials.id}).pipe<Users>(
      map( (user: Users) => <Users>{id: user.id, email: user.email})
    )
  }
}