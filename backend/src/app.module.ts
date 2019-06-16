import { Module } from '@nestjs/common';
import { AppController } from './controllers/app/app.controller';
import { AppService } from './services/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { dbConfig } from './database.config'

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig)
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ]
})

export class AppModule {
  constructor(private a: Connection){}
}