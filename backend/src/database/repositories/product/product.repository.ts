import type { ChangeProductDto } from "../../../api/product/change.dto";
import { DatabaseOrm } from "src/database/repositories/database.service";
import type { ProductEntity } from "../../entities/product";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductRepository {

    public constructor(
        private readonly databaseOrm: DatabaseOrm
    ) {}

    public save(data: ProductEntity): void {
        return this.databaseOrm.save(data);
    }

    public findAll(): Array<ProductEntity> {
        return this.databaseOrm.findAll();
    }

    public findOne(id: number): ProductEntity {
        return this.databaseOrm.findOne(id);
    }

    public delete(id: number): void {
        return this.databaseOrm.delete(id);
    }

    public change(changeProductDto: ChangeProductDto): void {
        return this.databaseOrm.change(changeProductDto);
    }
}
