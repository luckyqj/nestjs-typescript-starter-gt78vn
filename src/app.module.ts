import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './modules/test/test.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/test/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '114.116.14.12',
      port: 3306,
      username: 'qujin',
      password: 'Aa123456',
      database: 'my_task',
      entities: [User],
      synchronize: true,
    }),
    TestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
