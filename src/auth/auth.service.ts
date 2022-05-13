import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(username: string, ip: string): Promise<any> {
    console.log('in validateUser');
    let user = await this.userService.findByUsername(username);
    if (!user) {
      console.log('not found');
      user = this.userService.createUser(username, ip);
    }
    return user;

    throw new HttpException(
      {
        success: false,
        error: 'User not found',
      },
      HttpStatus.OK,
    );
  }
}
