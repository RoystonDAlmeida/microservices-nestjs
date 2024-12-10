import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>( // Creates a Microservice instance
    AppModule,
    {
      transport: Transport.RMQ, // Specifies RabbitMQ as transport layer
      options: {
        urls: [process.env.RABBITMQ_URL], // RabbitMQ server URL
        queue: 'user_queue', // Queue name for user service
        queueOptions: {
          durable: false,
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
