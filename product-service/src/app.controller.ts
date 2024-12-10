// product.controller.ts
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ProductService } from './app.service';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern({ cmd: 'get_products' })
  getProducts() {
    return this.productService.getAllProducts();
  }

  @MessagePattern({ cmd: 'create_product' })
  createProduct(data: any) {
    return this.productService.createProduct(data);
  }
}
