import { Controller, Get } from '@nestjs/common';
import { TestService } from '../services/test.service';

@Controller('test')
export class TestController {
  constructor(private testService: TestService) {}

  @Get()
  firstGetRoute() {
    return this.testService.findAll();
    // return {
    //   data: {
    //     name: 'result',
    //   },
    // };
  }
}
