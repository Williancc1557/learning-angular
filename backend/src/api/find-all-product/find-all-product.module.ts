import { ProductRepository } from "./../../database/repositories/product/product.repository";
import { DatabaseOrm } from "src/database/repositories/database.service";
import { Module } from "@nestjs/common";
import { FindAllProductController } from "./find-all-product.controller";

@Module({
  controllers: [FindAllProductController],
  providers: [ProductRepository, DatabaseOrm],
})
export class FindAllProductModule {}
