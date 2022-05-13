import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  users = [
    {
      id: 1,
      username: 'test',
    },
    {
      id: 2,
      username: 'Swift',
    },
    {
      id: 3,
      username: 'jmcdo20',
    },
  ];

  findByUsername = (username: string) => {
    return this.users.filter((user) => user.username == username)[0];
  };

  createUser = (username: string, ip: string) => {
    console.log('created user! ', username);
    return { id: 4, username: username };
  };
}
