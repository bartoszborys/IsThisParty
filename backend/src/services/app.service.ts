import { Injectable } from '@nestjs/common';
import { Users } from 'src/entities/users.entity';
import { Connection } from 'typeorm';

@Injectable()
export class AppService {
  constructor(private connection: Connection){}
  async getHello(): Promise<string> {
    const x = new Users();
    x.login = "Bartosz";
    x.password = "123456";
    await this.connection.manager.save(x);
    return "OK";
  }
}
