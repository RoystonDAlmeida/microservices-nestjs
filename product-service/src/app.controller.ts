import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class ProductController {
  @MessagePattern('create_product') // Listening for 'create_user' messages
  createProduct(data: any) {
    console.log('Product data received:', data);
    // Logic to create a user in the database goes here
    return { success: true };
  }
}
