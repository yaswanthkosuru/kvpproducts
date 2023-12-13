import { NextRequest, NextResponse } from "next/server"
import { GetSessionAndDB } from "@utils/GetSessionAndDB";
import { cartType } from "@models/cartModel";
import { ObjectId } from "mongodb";

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.json();
    const { product_id } = data;
    const { session, User, Database } = await GetSessionAndDB();
    if (!session) {
        return NextResponse.json({ msg: 'No session found in Browser' }, { status: 500, statusText: 'No session found' })
    }
    else if (!User) {
        return NextResponse.json({ msg: 'No User found in Data Base' }, { status: 500, statusText: 'no userfound' })
    }
    else if (!Database) {
        return NextResponse.json({ msg: 'Error connecting to Database' }, { status: 500, statusText: 'Error connecting to Database' })
    }
    const cartCollection = Database.collection<cartType>('carts');
    await cartCollection.findOneAndDelete({
        user_id: User._id,
        product_id: new ObjectId(product_id)
    })

    return NextResponse.json({ succes: true }, { status: 200, headers: { 'Content-Type': 'application/json' } });

}