import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import { CategoriesModule } from '../modules/categories/categories.module';

const server = express();

async function bootstrap() {
  const app = await NestFactory.create(
    CategoriesModule,
    new ExpressAdapter(server),
  );
  await app.init();
}

bootstrap();

export const categories = server;
