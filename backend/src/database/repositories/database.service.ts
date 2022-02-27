import type { ChangeProductDto } from "../../api/product/change.dto";
import type { ProductEntity } from "./../entities/product";
import { Injectable } from "@nestjs/common";
import { find } from "rxjs";


const database: Array<ProductEntity> = [];

@Injectable()
export class DatabaseOrm {
    private static generateSequenceId() {

        const lastItem = database.slice(-1)[0]
        console.log(lastItem);

        if (!lastItem) return 1

        const id = lastItem.id + 1 // eslint-disable-line

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
        const product = database.find(product => product.id == id);

        return product
    }

    public delete(id: number): void {
        const productPosition = database.findIndex(product => product.id == id)

        database.splice(productPosition, 1); // eslint-disable-line
    }

    public change(productBody: ChangeProductDto): ProductEntity {
        const index = database.findIndex(product => product.id == productBody.id)

        const findProduct = this.findOne(productBody.id)

        database[index].name = productBody.name || findProduct.name;
        database[index].price = productBody.price || findProduct.price;

        return database[index]
    }
}
