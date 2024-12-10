// order.controller.ts
import { Controller } from '@nestjs/common';
import {
  MessagePattern,
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { OrderService } from './app.service';
import * as dotenv from 'dotenv';
dotenv.config();

@Controller()
export class OrderController {
  private mainQueueClient: ClientProxy;

  constructor(private readonly orderService: OrderService) {
    this.initializeClientProxy();
  }

  // Initialize Client Proxy in a separate method
  private initializeClientProxy() {
    this.mainQueueClient = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBITMQ_URL],
        queue: 'main_queue',
        queueOptions: { durable: false },
      },
    });
    console.log('mainQueueClient initialized:', this.mainQueueClient);
  }

  @MessagePattern({ cmd: 'get_orders' })
  getOrders() {
    return this.orderService.getAllOrders();
  }

  @MessagePattern({ cmd: 'create_order' })
  async createOrder(data: any) {
    // Publish message to main_queue
    // Check if the client proxy is initialized before emitting
    if (this.mainQueueClient) {
      this.mainQueueClient.emit({ cmd: 'order_created' }, data);
      console.log(
        `Message emitted to main_queue with payload: ${JSON.stringify(data)}`,
      );
    } else {
      console.error('mainQueueClient is not initialized. Message not emitted.');
    }
    return this.orderService.createOrder(data);
  }
}
