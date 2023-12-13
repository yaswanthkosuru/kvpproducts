
import { NextRequest, NextResponse } from 'next/server';
import { GetSessionAndDB } from '@utils/GetSessionAndDB';
import { Collection, ObjectId } from 'mongodb';
import { cartType } from '@models/cartModel';


export async function PATCH(req: NextRequest) {
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
    const CartCollection: Collection<cartType> = Database.collection('carts');


    const data = await req.json();
    const { product_id, increment } = data;
    console.log(product_id, increment, 'inside patchroute');
    if (increment) {
        const cart = await CartCollection.findOneAndUpdate(
            {
                product_id: new ObjectId(product_id),
                user_id: User._id,
            },
            {
                $inc: {
                    cartquantity: 1
                }
            }
        )
        console.log(cart, 'incremant');

    }
    else {

        const cart = await CartCollection.findOneAndUpdate(
            {
                product_id: new ObjectId(product_id),
                user_id: User._id,
                cartquantity: { $gt: 1 }
            },
            {
                $inc: {
                    cartquantity: -1
                }
            }
        )
    }




    return NextResponse.json({ success: true }, { status: 200, statusText: 'updated succesfully' });
}
