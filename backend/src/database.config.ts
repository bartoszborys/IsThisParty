import { TypeOrmModule } from "@nestjs/typeorm";

export const dbConfig: TypeOrmModule = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "client",
    password: "123456",
    database: "isthisparty",
    entities: [
      "src/**/*.entity.ts",
      "src/**/*.entity.js"
    ],
    synchronize: true
}