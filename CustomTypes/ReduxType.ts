import { productModel } from "@models/product";
export type statustype = 'rejected' | 'idle' | 'pending'
export type initialproductstate = {
    products: undefined | null | productModel[],
    status: statustype,
}
