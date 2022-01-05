import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { DatabaseConnectionService } from './shared/services/db-connection.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConnectionService
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
