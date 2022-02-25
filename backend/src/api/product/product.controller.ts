import { ChangeProductDto } from "./change.dto";
import { ProductRepository } from "./../../database/repositories/product/product.repository";
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ProductEntity } from "src/database/entities/product";

@Controller()
export class ProductController {
    public constructor(
        private readonly productRepository: ProductRepository
    ) { }

    @Get("find")
    public getAllProducts() {
        return {
            statusCode: HttpStatus.OK,
            body: this.productRepository.findAll(),
        };
    }

    @Get("findbyid/:id")
    public findById(@Param("id") id: number) {
        return this.productRepository.findOne(id);
    }

    @Post("save")
    public save(@Body() product: ProductEntity) {
        return this.productRepository.save(product);
    }

    @Put("change")
    public change(@Body() data: ChangeProductDto) {
        return this.productRepository.change(data);
    }

    @Delete("delete/:id")
    public delete(@Param("id") id: number) {
        return this.productRepository.delete(id);
    }
}
