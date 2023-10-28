import { ObjectId } from "mongodb";
import { z } from "zod";
export type itemtype = {
    product_id: string | ObjectId,
    quantity: number,
}
export type CartType = {
    _id?: string,
    user_id: ObjectId | string,
    items: [itemtype]
};

