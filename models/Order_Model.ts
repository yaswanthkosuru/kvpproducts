import { ObjectId } from "mongodb";
import { itemtype } from "./Cart_Model";
import { AddressType } from "./Address_Model";

export type OrderType = {
    _id?: string | ObjectId;
    user_id: ObjectId,
    items: itemtype[],
    time: string | Date,
    address: AddressType,
    amount: number,
    ordertype: 'cod' | 'prepaid'
    orderstatus: 'delivered' | 'shipped' | 'orderbooked'

};
