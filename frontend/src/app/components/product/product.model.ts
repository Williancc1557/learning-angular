export interface Product {
    id?: number;
    name: string;
    price: number;
}

export interface RequestResponse {
    statusCode: number;
    body: Array<Product>
}