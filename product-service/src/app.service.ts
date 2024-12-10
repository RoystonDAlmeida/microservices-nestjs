// product.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = [];

  getAllProducts() {
    return this.products;
  }

  createProduct(product) {
    this.products.push(product);
    return product;
  }
}
