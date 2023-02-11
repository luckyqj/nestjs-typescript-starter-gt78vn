import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestController } from './controllers/test.controller';
import { TestService } from './services/test.service';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
