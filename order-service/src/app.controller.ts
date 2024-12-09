import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class OrderController {
  @MessagePattern('create_order') // Listening for 'create_user' messages
  createOrder(data: any) {
    console.log('Order data received:', data);
    // Logic to create a user in the database goes here
    return { success: true };
  }
}
