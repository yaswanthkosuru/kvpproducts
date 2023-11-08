import { itemtype } from "@models/Cart_Model";

export type CartStoreType = {
    items: itemtype[] | undefined
    status: 'Loading' | 'idle' | 'rejected'
    cartlength: number
}
export type checkoutcartstate = {
    pageno: number;
}
export type checkoutcartaction = {
    type: 'setpageno'
    payload?: number
}