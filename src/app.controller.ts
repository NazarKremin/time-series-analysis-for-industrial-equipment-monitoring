import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  analyzeTimeSeries(@Body('signals') signals: number[]) {
    return AppService.analyzeTimeSeries(signals);
  }

  @Post('/pattern')
  getTestPattern(@Body('signals') signal: number[]) {
    return AppService.testPattern(signal);
  }
}
