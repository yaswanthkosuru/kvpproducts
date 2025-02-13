import { NextRequest, NextResponse } from "next/server"
import { GetSessionAndDB } from "@utils/GetSessionAndDB";
import { cartType } from "@models/cartModel";
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
    const cartCollection = Database.collection<cartType>('carts');
    const cartproducts = await cartCollection.aggregate([
        { $match: { user_id: User._id } },
        {
            $lookup: {
                from: 'products',
                localField: 'product_id',
                foreignField: '_id',
                as: 'product',
            },
        },
        {
            $project: {
                product: { $arrayElemAt: ["$product", 0] },
                cartquantity: 1,
            }
        },
        {
            $replaceRoot: {
                newRoot: {
                    $mergeObjects: ["$product", { cartquantity: "$cartquantity" }]
                }
            }
        }
    ]).toArray();


    return NextResponse.json({ cartproducts: cartproducts }, { status: 200, headers: { 'Content-Type': 'application/json' } });
    //retrun array of cartitems
}