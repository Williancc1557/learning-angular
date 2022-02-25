import { Module } from "@nestjs/common";
import { SendProductModule } from "./api/save-product/save-product.module";
import { FindAllProductModule } from './api/find-all-product/find-all-product.module';

@Module({
  imports: [SendProductModule, FindAllProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
