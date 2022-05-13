import { SessionSerializer } from './session.serializer';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from './../user/user.service';
import { UserModule } from './../user/user.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [UserModule],
  providers: [AuthService, UserService, LocalStrategy, SessionSerializer],
  controllers: [AuthController],
})
export class AuthModule {}
