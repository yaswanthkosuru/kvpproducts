import { ObjectId } from "mongodb";

export type OrderType = {
    _id?: string | ObjectId;
    user_id: ObjectId,
    product_id: string | ObjectId,
    orderedquantity: number,
    time: string | Date,
    address: string,
    amount: number,
    ordertype: 'COD',
    orderstatus: 'delivered' | 'shipped' | 'orderbooked'
};
