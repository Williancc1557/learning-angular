import { DatabaseOrm } from "src/database/repositories/database.service";
import { ProductRepository } from "../../database/repositories/product/product.repository";
import { Module } from "@nestjs/common";
import { SaveProductController } from "./save-product.controller";

@Module({
    controllers: [SaveProductController],
    providers: [ProductRepository, DatabaseOrm],
})
export class SendProductModule {}
