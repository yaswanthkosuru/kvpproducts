
// {
//     "_id": {
//         "$oid": "64c4dd6b498f5bcee162344f"
//     },
//     "email": "yaswanthkosuru999@gmail.com",
//         "username": "yaswanthkosuru",
//             "image": "https://lh3.googleusercontent.com/a/AAcHTteNGRM4IQc-Kv8PL6IYffIseMjiVlz5rAQuxp-MSf260w=s96-c",
//                 "__v": 0
// }

import { ObjectId } from "mongodb"

export type userModel = {
    _id: string,
    email: string,
    username: string
    image: string,

}
export type userType = {
    _id: ObjectId,
    email: string,
    username: string
    image: string,

}

