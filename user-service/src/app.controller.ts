// user.controller.ts
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserService } from './app.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: 'get_users' })
  getUsers() {
    return this.userService.getAllUsers();
  }

  @MessagePattern({ cmd: 'create_user' })
  createUser(data: any) {
    return this.userService.createUser(data);
  }
}
