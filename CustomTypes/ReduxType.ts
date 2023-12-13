import { addressType } from "@models/addressModel";
import { productType } from "@models/product";
export type statustype = 'rejected' | 'idle' | 'pending'
export type initialproductstate = {
    products: undefined | null | productType[],
    status: statustype,
}
export type productdetails = productType & {
    cartquantity?: number
}

export type initialcartstate = {
    cartproducts: undefined | null | productdetails[],
    status: statustype,
}
export type createproductformtype = productType;
export type checkoutcartstate = {
    pageno: number
}
export type checkoutcartaction = {
    payload: number,
    type: 'setpageno'
}
export type initialAddressType = {
    Address: addressType | null | undefined;
    status: statustype;
}