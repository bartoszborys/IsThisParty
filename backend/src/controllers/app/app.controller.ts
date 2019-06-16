import { Controller, Get, HttpCode } from '@nestjs/common';
import { AppService } from '../../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(205)
  async getHello(): Promise<string> {
    return await this.appService.getHello();
  }
}
