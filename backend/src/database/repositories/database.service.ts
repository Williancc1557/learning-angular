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
    }

    public findAll(): Array<ProductEntity> {
        return database;
    }
}
