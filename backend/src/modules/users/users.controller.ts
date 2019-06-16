import { Controller, Get, HttpCode } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';

@Controller('api/v1/users')
export class UsersController {
  constructor(private users: UsersService){};

  @Get('register')
  @HttpCode(201)
  public async register(): Promise<any>{
    return await this.users.register();
  }

  @Get('login')
  @HttpCode(200)
  public async login(): Promise<Users[]>{
    return await this.users.login();
  }
}
