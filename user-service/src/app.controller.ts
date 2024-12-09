import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UserController {
  @MessagePattern('create_user') // Listening for 'create_user' messages
  createUser(data: any) {
    console.log('User data received:', data);
    // Logic to create a user in the database goes here
    return { success: true };
  }
}
