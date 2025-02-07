import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [CategoriesModule, UsersModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
