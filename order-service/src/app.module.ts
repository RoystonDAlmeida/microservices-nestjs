import { Module } from '@nestjs/common';
import { OrderController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [OrderController],
  providers: [AppService],
})
export class AppModule {}
