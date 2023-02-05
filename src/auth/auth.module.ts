import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './auth.guard';
@Global()
@Module({
  imports: [
    JwtModule.register({
      secret: '123456',
      signOptions: {
        expiresIn: '80h',
      },
    }),
  ],
  providers: [AuthGuard],
  exports: [AuthGuard],
})
export class AuthModule {}
