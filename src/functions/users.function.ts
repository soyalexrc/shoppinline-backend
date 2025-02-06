import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import { UsersModule } from '../modules/users/users.module';

const server = express();

async function bootstrap() {
  const app = await NestFactory.create(UsersModule, new ExpressAdapter(server));
  await app.init();
}

bootstrap();

export const users = server;
