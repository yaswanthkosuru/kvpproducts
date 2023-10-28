
import { z } from "zod";
import { ObjectId } from "mongodb";
export type ProductType = {
    name: string;
    description: string;
    price: number;
    usersrated: number;
    overallrating: number;
    stripe_product_id: string;
    stripe_price_id: string;
    imageUrls: string[];
    caloriespercent: number;
    StockQuantity: number;
    _id?: ObjectId | string;
    user_id?: ObjectId | string;
};

export type FormInputType = Omit<ProductType, 'stripe_product_id' | 'stripe_price_id'>;
