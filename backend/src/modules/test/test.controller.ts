import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('api/v1/test')
export class TestController {
  constructor(){};

  @Get()
  @UseGuards(AuthGuard())
  public fetchOne(@Req() request: Request): Object{
    return request.user;
  }
}
