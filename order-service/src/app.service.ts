// order.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  private orders = [];

  getAllOrders() {
    return this.orders;
  }

  createOrder(order) {
    this.orders.push(order);
    return order;
  }
}
