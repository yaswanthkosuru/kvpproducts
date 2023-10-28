import { Document, ObjectId } from "mongodb";
import { z } from "zod"

// {
//     "_id": {
//         "$oid": "64c4dd6b498f5bcee162344f"
//     },
//     "email": "yaswanthkosuru999@gmail.com",
//         "username": "yaswanthkosuru",
//             "image": "https://lh3.googleusercontent.com/a/AAcHTteNGRM4IQc-Kv8PL6IYffIseMjiVlz5rAQuxp-MSf260w=s96-c",
//                 "__v": 0
// }
export const UserSchema = z.object(
    {
        email: z.string(),
        username: z.string(),
        image: z.string(),
    }
)
export type UserTypeWithoutId = z.infer<typeof UserSchema>;
export interface UserType extends UserTypeWithoutId {
    _id: ObjectId,
}
