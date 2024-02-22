import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/cron')
  cronJob(): Promise<string> {
    return this.appService.cronJob();
  }

  @Get('/file')
  getFile() {
    return this.appService.getFile();
  }
}
