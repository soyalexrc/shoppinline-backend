import { Module } from '@nestjs/common';
import { CategoriesModule } from './modules/categories/categories.module';
import { UsersModule } from "./modules/users/users.module";
import { ProductsModule } from "./modules/products/products.module";

@Module({
  imports: [CategoriesModule, UsersModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
