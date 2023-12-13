import { ReviewType } from "@models/reviewModel";
import { GetSessionAndDB } from "@utils/GetSessionAndDB";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest, res: NextResponse) {
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
    const { product_id, review, rating } = await req.json();
    console.log(product_id, review, 'rating,review');

    const ReviewCollection = Database.collection<ReviewType>('reviews');
    const prevreview = await ReviewCollection.findOneAndUpdate(
        {
            User_id: new ObjectId(User._id),
            Product_id: new ObjectId(product_id),
        },
        {
            $set: {
                User_id: new ObjectId(User._id),
                Product_id: new ObjectId(product_id),
                username: User.username,
                review: review,
                rating: rating,
            }
        },
        { upsert: true }
    );
    return NextResponse.json({ sucess: true }, { status: 200 });


}