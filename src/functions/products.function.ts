import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import { ProductsModule } from '../modules/products/products.module';

const server = express();

async function bootstrap() {
  const app = await NestFactory.create(
    ProductsModule,
    new ExpressAdapter(server),
  );
  await app.init();
}

bootstrap();

export const products = server;
