import { ProductRepository } from "./../../database/repositories/product/product.repository";
import { ProductEntity } from "./../../database/entities/product";
import { Body, Controller, Post } from "@nestjs/common";

@Controller("save")
export class SaveProductController {
    public constructor(
        private readonly productRepository: ProductRepository
    ) {}

    @Post()
    public save(@Body() product: ProductEntity) {
        this.productRepository.save(product);
    }
}
