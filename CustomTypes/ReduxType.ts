import { itemtype } from "@models/Cart_Model";

export type CartStoreType = {
    items: itemtype[] | undefined
    status: 'Loading' | 'idle' | 'rejected'
    cartlength: number
}
export type checkoutcartstate = {
    addressDisplay: boolean;
    productsDisplay: boolean;
    paymentInfoDisplay: boolean;
    couponDisplay: boolean;
}
export type checkoutcartaction = {
    type: 'ToggleAddress' | 'ToggleProducts' | 'TogglePaymentInfo' | 'ToggleCouponDisplay'
    payload?: number
}