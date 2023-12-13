import { ObjectId } from "mongodb";
import { addressType } from "./addressModel";
import { cartproduct } from "@CustomTypes/ApiSchemaType";
export type orderedproductsType = {
    product: cartproduct,
    orderstatus: 'delivered' | 'shipped' | 'ordered'
}
export type orderType = {
    _id?: string | ObjectId;
    user_id: ObjectId,
    orderproducts: orderedproductsType[],
    time: Date,
    address: addressType,
    discountedprice: number,
    originalprice: number,
    coupon: string,
    orderstatus: 'delivered' | 'shipped' | 'ordered'
    ordertype: 'COD',
};
