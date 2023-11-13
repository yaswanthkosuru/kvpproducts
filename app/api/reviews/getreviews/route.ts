import { ReviewType } from "@models/Review_Model";
import { GetSessionAndDB } from "@utils/GetSessionAndDB";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const { product_id } = await req.json();
    const { session, User, Database } = await GetSessionAndDB();
    if (!session) {
        return NextResponse.json({ msg: 'No session found in Browser' }, { status: 500 })
    }
    if (!User) {
        return NextResponse.json({ msg: 'No User found in Data Base' },)
    }
    if (!Database) {
        return NextResponse.json({ msg: 'Error connecting to Database' },)
    }
    const ReviewCollection = Database.collection<ReviewType>('reviews');
    const reviews = await ReviewCollection.find({
        Product_id: new ObjectId(product_id)
    }).project({ User_id: 0, _id: 0, Product_id: 0 }).toArray();
    return NextResponse.json({ reviews: reviews });
}