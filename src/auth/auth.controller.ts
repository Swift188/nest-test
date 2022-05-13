import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { Controller, Post, Req, UseGuards } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login() {
    return {
      success: true,
      message: 'Successfully logged in',
    };
  }
}
