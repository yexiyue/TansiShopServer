import { JwtService } from '@nestjs/jwt';
import { Body, Controller, Get, Param, Post, Query, HttpException, HttpStatus } from '@nestjs/common';
import { IsPublic } from 'src/auth/auth.decorator';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private jwt :JwtService
  ) {}

  @IsPublic()
  @Post('/login')
  async findOne(@Body('username') username: string,@Body('password') password) {
    const user =await this.userService.findOne(username);
    if(user.password===password){
      return {
        token:this.jwt.sign(user),
        username
      };
    }
    throw new HttpException('账号或密码错误',HttpStatus.EXPECTATION_FAILED)
  }
}
