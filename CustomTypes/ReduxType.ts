import { itemtype } from "@models/Cart_Model";

export interface CartStoreType {
    items: itemtype[] | undefined;
    status: 'Loading' | 'idle' | 'rejected';
}