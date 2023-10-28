import { NextRequest, NextResponse } from "next/server"
import { GetSessionAndDB } from "@utils/GetSessionAndDB";
import { CartType } from "@models/Cart_Model";
import { ObjectId } from "mongodb";

export async function POST(req: NextRequest, res: NextResponse) {

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
    const CartCollection = Database.collection<CartType>('carts');
    const uid = new ObjectId(User._id);

    const usercart = await CartCollection.findOne({
        user_id: User._id,
    })
    return NextResponse.json({ items: usercart?.items }, { status: 200, headers: { 'Content-Type': 'application/json' } });
    //retrun array of cartitems
}