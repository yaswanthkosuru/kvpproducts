import { ObjectId } from "mongodb";

export interface ReviewType {
    User_id: string | ObjectId,
    Product_id: string | ObjectId
    username: string;
    review: string;
    rating: number;
}
