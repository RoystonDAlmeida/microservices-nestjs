// user.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [];

  getAllUsers() {
    return this.users;
  }

  createUser(user) {
    this.users.push(user);
    return user;
  }
}
