import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'orm.config';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forRoot(config), TypeOrmModule.forFeature([User])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
