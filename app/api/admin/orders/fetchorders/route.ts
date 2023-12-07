
import { GetSessionAndDB } from "@utils/GetSessionAndDB";
import { NextRequest, NextResponse } from "next/server";
import { FormInputType, ProductType } from "@models/productModel";
import { AddressType } from "@models/addressModel";
import { OrderType } from "@models/orderModel";
import { UserType } from "@models/userModel";
import { ObjectId } from "mongodb";


export async function POST(request: NextRequest, response: NextResponse) {
    const { session, User, Database } = await GetSessionAndDB();
    if (!session) {
        return NextResponse.json({ msg: 'No session found in Browser' }, { status: 401, statusText: 'userid not found ' })
    }
    if (!User) {
        return NextResponse.json({ msg: 'No User found in Data Base' }, { status: 401, statusText: 'userid not found ' })
    }
    if (!Database) {
        return NextResponse.json({ msg: 'Error connecting to Database' }, { status: 401, statusText: 'userid not found ' })
    }
    const OrdersCollection = Database.collection<OrderType>('orders');
    const order_details = await OrdersCollection.aggregate([
        { $match: {} },
        {
            $lookup: {
                from: "users",
                localField: "user_id",
                foreignField: "_id",
                as: "userdetails"
            },
        },
        {
            $lookup: {
                from: "products",
                localField: "items.product_id",
                foreignField: "_id",
                as: "productdetails"
            },
        },
        {
            $project: {
                "_id": 0,
                "user_id": 0,
                "items": 0,
                "productdetails.StockQuantity": 0
            }
        }
    ]).toArray();

    return NextResponse.json({ order_details: order_details });
}