import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Controller('api/v1/test')
export class TestController {
  constructor(private service: UsersService){}

  @Get()
  public test(){
    return this.service.login();
  }
}
