import { Module } from "@nestjs/common";
import { DatabaseOrm } from "src/database/repositories/database.service";
import { ProductRepository } from "src/database/repositories/product/product.repository";
import { ProductController } from "./product.controller";

@Module({
    controllers: [ProductController],
    providers: [ProductRepository, DatabaseOrm],
})
export class ProductModule {}
