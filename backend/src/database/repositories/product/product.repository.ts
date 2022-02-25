import type { ProductEntity } from "../../entities/product";
import { DatabaseOrm } from "../database.service";
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
}
