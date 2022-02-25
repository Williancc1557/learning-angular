import { ProductRepository } from "./../../database/repositories/product/product.repository";
import { Controller, Get, HttpStatus } from "@nestjs/common";

@Controller("find")
export class FindAllProductController {
    public constructor(
        private readonly productRepository: ProductRepository
    ) { }

    @Get()
    public getAllProducts() {
        return {
            statusCode: HttpStatus.OK,
            body: this.productRepository.findAll(),
        };
    }
}
