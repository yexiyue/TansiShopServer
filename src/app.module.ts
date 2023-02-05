import { HttpFilterFilter } from './http-filter/http-filter.filter';
import { TransformInterceptor } from './transform/transform.interceptor';
import { Global, Module, Logger } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';

import { AuthModule } from './auth/auth.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ClotheModule } from './clothe/clothe.module';
import { CategoryModule } from './category/category.module';

@Global()
@Module({
  imports: [
    UserModule,
    AuthModule,
    ClotheModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    TransformInterceptor,
    Logger,
    HttpFilterFilter,
  ],
  exports: [PrismaService, TransformInterceptor, Logger, HttpFilterFilter],
})
export class AppModule {}
