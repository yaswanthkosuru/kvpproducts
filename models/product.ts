
import { ZodType, z } from 'zod';
import { ObjectId } from "mongodb";
export const categoryvalues = ["vegetables", "fruits", "dairy", 'grains', 'dryfruits'] as const;
export const measurings = ['gram', 'kg', 'liter', 'dozen'] as const;
export const productSchema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    usersrated: z.number(),
    overallrating: z.number(),
    imageUrls: z.array(z.string()),
    caloriespercent: z.number(),
    stockQuantity: z.number(),
    category: z.enum(categoryvalues),
    units: z.enum(measurings),

});
export type productType = z.infer<typeof productSchema> & {
    _id?: ObjectId,
    user_id?: ObjectId,
}


