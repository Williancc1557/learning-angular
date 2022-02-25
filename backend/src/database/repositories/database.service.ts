import type { ChangeProductDto } from "../../api/product/change.dto";
import type { ProductEntity } from "./../entities/product";
import { Injectable } from "@nestjs/common";


const database: Array<ProductEntity> = [];

@Injectable()
export class DatabaseOrm {
    private static generateSequenceId() {
        const databaseLength: number = database.length;

        const id = databaseLength + 1  // eslint-disable-line

        return id;
    }

    public save(data: ProductEntity): void {
        const id = DatabaseOrm.generateSequenceId();

        database.push({
            ...data,
            id,
        });

        console.log(database);
    }

    public findAll(): Array<ProductEntity> {
        return database;
    }

    public findOne(id: number): ProductEntity {
        return database.find((product: ProductEntity) => product.id === id);
    }

    public delete(id: number): void {
        const productPosition = id - 1; // eslint-disable-line

        database.splice(productPosition, 1); // eslint-disable-line
    }

    public change(productBody: ChangeProductDto): void {
        const product = this.findOne(productBody.id);

        this.delete(product.id);

        product.name = productBody.name || product.name;
        product.price = productBody.price || product.price;

        database.push(product);
    }
}
