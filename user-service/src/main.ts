import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>( // Creates a Microservice instance
    AppModule,
    {
      transport: Transport.RMQ, // Specifies RabbitMQ as transport layer
      options: {
        urls: ['amqp://localhost:5672'], // RabbitMQ server URL
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
