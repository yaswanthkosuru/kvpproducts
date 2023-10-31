import { itemtype } from "@models/Cart_Model";

export type CartStoreType = {
    items: itemtype[] | undefined
    status: 'Loading' | 'idle' | 'rejected'
    cartlength: number
}