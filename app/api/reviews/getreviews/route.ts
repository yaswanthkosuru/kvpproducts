import { ReviewType } from "@models/reviewModel";
import { ConnectToDB } from "@utils/ConnectDB";
import { GetSessionAndDB } from "@utils/GetSessionAndDB";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const { product_id } = await req.json();
    const Database = await ConnectToDB();
    if (!Database) {
        return NextResponse.json({ msg: 'Error connecting to Database' },)
    }
    const ReviewCollection = Database.collection<ReviewType>('reviews');
    const reviews = await ReviewCollection.find({
        Product_id: new ObjectId(product_id)
    }).project({ User_id: 0, _id: 0, Product_id: 0 }).toArray();
    return NextResponse.json({ reviews: reviews });
}