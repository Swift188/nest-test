import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Req, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'username',
      passwordField: 'username',
    });
  }

  async validate(req: any, username: string): Promise<any> {
    console.log('validate');
    const user = await this.authService.validateUser(username, req.IpAddress);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
