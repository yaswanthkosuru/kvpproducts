import { NextRequest, NextResponse } from "next/server";
import { ConnectToDB } from "@utils/ConnectDB";
import { GetSessionAndDB } from "@utils/GetSessionAndDB";
import { cartType } from "@models/cartModel";
import { Filter, ObjectId, UpdateFilter } from "mongodb";

export async function POST(req: NextRequest, res: NextResponse) {

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
    const response = await req.json()
    const { product_id } = response;
    console.log('product_id: ', product_id, 'r:cretecart');


    const CartCollection = Database.collection<cartType>('carts');
    const usercart = await CartCollection.find({
        user_id: User._id,
        product_id: new ObjectId(product_id)
    }).toArray();
    if (usercart.length == 0) {
        console.log('creating cart');

        await CartCollection.insertOne({
            user_id: User._id,
            product_id: new ObjectId(product_id),
            cartquantity: 1,
        })
    }

    console.log(usercart, 'inside cart');

    return NextResponse.json({ msg: 'success' }, { status: 200 });
} 