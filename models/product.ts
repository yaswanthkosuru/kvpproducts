
import { ZodType, z } from 'zod';
import { ObjectId } from "mongodb";
export const productSchema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    usersrated: z.number(),
    overallrating: z.number(),
    imageUrls: z.array(z.string()),
    caloriespercent: z.number(),
    stockQuantity: z.number(),
    category: z.string(),
    units: z.string(),

});
export type productType = z.infer<typeof productSchema> & {
    _id?: ObjectId,
    user_id?: ObjectId,
}
export type productModel = z.infer<typeof productSchema> & {
    _id?: ObjectId,
    user_id: ObjectId,
}

