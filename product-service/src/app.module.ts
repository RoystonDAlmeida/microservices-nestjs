import { Module } from '@nestjs/common';
import { ProductController } from './app.controller';
import { ProductService } from './app.service';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductService],
})
export class AppModule {}
