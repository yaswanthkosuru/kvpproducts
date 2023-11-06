
import { z } from "zod";
import { ObjectId } from "mongodb";
export type ProductType = {
    name: string;
    description: string;
    price: number | string;
    usersrated: number;
    overallrating: number;
    imageUrls: string[];
    caloriespercent: number;
    StockQuantity: number;
    _id?: ObjectId | string;
    user_id?: ObjectId | string;
    units: string,
};

export type FormInputType = Omit<ProductType, 'stripe_product_id' | 'stripe_price_id'>;
