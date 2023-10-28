import { z } from "zod";
import { ObjectId } from "mongodb";

export const AddressSchema = z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    postalCode: z.string(),
    phoneNumber: z.string().length(10, { message: 'error' }),
});

export type AddressTypeWithOutId = z.infer<typeof AddressSchema>
export interface AddressType extends AddressTypeWithOutId {
    _id?: ObjectId,
    user_id?: ObjectId
}