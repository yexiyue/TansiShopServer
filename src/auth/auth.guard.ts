import { JwtService } from '@nestjs/jwt';

import { IS_PUBLIC } from './auth.decorator';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private reflect:Reflector,private jwt:JwtService){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic=this.reflect.get(IS_PUBLIC,context.getHandler())
    if(isPublic){
      return true
    }else{
      const req=context.switchToHttp().getRequest<Request>()
      const token=req.headers.authorization
      if(this.jwt.verify(token)){
        return true
      }
      return false
    };
    
    
  }
}
