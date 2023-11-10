import { ObjectId } from "mongodb";
import { itemtype } from "./Cart_Model";
import { AddressType } from "./Address_Model";
export type ItemType = {
    product_id: string | ObjectId
    quantity: number,
    price: number;
}[];
export type OrderType = {
    _id?: string | ObjectId;
    user_id: ObjectId,
    items: ItemType,
    time: string | Date,
    address: AddressType,
    amount: number,
    ordertype: 'cod' | 'prepaid'
    orderstatus: 'delivered' | 'shipped' | 'orderbooked'

};
