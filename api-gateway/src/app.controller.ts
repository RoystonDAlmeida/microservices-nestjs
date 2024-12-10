import { Controller, Post, Body, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern } from '@nestjs/microservices';
import { USER_SERVICE, PRODUCT_SERVICE, ORDER_SERVICE } from './constants';

@Controller()
export class AppController {
  constructor(
    @Inject(USER_SERVICE) private readonly userServiceClient: ClientProxy,
    @Inject(PRODUCT_SERVICE) private readonly productServiceClient: ClientProxy,
    @Inject(ORDER_SERVICE) private readonly orderServiceClient: ClientProxy,
  ) {}

  @Post('get_users')
  getUsers(@Body() data: any) {
    return this.userServiceClient.send({ cmd: 'get_users' }, data);
  }

  @Post('create_user')
  createUser(@Body() data: any) {
    return this.userServiceClient.send({ cmd: 'create_user' }, data);
  }

  @Post('get_products')
  getProducts(@Body() data: any) {
    return this.productServiceClient.send({ cmd: 'get_products' }, data);
  }

  @Post('create_product')
  createProduct(@Body() data: any) {
    return this.productServiceClient.send({ cmd: 'create_product' }, data);
  }

  @Post('get_orders')
  getOrders(@Body() data: any) {
    return this.orderServiceClient.send({ cmd: 'get_orders' }, data);
  }

  @Post('create_order')
  createOrder(@Body() data: any) {
    console.log('Order created');
    return this.orderServiceClient.send({ cmd: 'create_order' }, data);
  }
  // Add the event handler for order_created
  @EventPattern({ cmd: 'order_created' }) async handleOrderCreated(data: any) {
    console.log('Order created event received:', data);
    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 50000));
    // Add your logic to handle the order created event
    console.log('Processed order:', data);
  }
}
