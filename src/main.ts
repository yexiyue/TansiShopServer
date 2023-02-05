import { HttpFilterFilter } from './http-filter/http-filter.filter';
import { TransformInterceptor } from './transform/transform.interceptor';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { AuthGuard } from './auth/auth.guard';
import { resolve } from 'path';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors()
  app.useGlobalInterceptors(app.get(TransformInterceptor));
  app.useGlobalFilters(app.get(HttpFilterFilter));
  app.useGlobalGuards(app.get(AuthGuard))
  app.useGlobalPipes(new ValidationPipe())
  app.useStaticAssets(resolve(__dirname,'../public'))
  await app.listen(3000);
}
bootstrap();
