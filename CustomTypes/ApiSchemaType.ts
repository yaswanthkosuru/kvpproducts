import { AxiosResponse } from "axios";
import { productSchema, productType } from "@models/product";
import { z } from "zod";
import { ObjectId } from "mongodb";
export const getcartitemSchema = z.object({
    cartproducts: z.array(productSchema.extend({
        cartquantity: z.number(),
    }))
})
export type getcartitemType = AxiosResponse<z.infer<typeof getcartitemSchema>>;
export type cartproduct = productType & {
    cartquantity?: number,
}
export type cartproductType = cartproduct[]