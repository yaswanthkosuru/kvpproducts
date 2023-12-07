import { ObjectId } from "mongodb";


export type CartType = {
    _id?: string,
    user_id: ObjectId | string,
    product_id: string | ObjectId,
    cartquantity: number,
};

