import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import { IsPublic } from './auth/auth.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @IsPublic()
  @Get()
  @Redirect('/index.html')
  getHello(): string {
    return this.appService.getHello();
  }
}
