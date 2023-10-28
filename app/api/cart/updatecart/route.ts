
import { NextRequest, NextResponse } from 'next/server';
import { GetSessionAndDB } from '@utils/GetSessionAndDB';
import { Collection, ObjectId } from 'mongodb';
import { CartType } from '@models/Cart_Model';


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
    const CartCollection: Collection<CartType> = Database.collection('carts');


    const data = await req.json();
    const { product_id, increment } = data;
    console.log(product_id, increment, 'inside patchroute');

    if (increment) {

        await CartCollection.findOneAndUpdate(
            {
                user_id: User._id,
                'items.product_id': new ObjectId(product_id)
            },
            {
                $inc: {
                    "items.$.quantity": 1
                }
            }
        )
    } else {
        //decrement
        const updatedcart = await CartCollection.findOneAndUpdate(
            {
                user_id: User._id,
                'items.product_id': new ObjectId(product_id)
            },
            {
                $inc: {
                    "items.$.quantity": -1
                }
            },
            { returnDocument: 'after' }
        )
        console.log(updatedcart, 'inside updatecart');
        const isnegative = updatedcart?.items.find(item => item.quantity <= 0)
        //if any thing hits zero then pull object
        if (isnegative) {
            console.log('deletecartitem patch decrement');

            await CartCollection.findOneAndUpdate(
                {
                    user_id: User._id,
                },
                {
                    $pull: { items: { quantity: { $lte: 0 } } }
                }
            )
        }

    }




    // Make sure the quantity doesn't go below 1 doesnot goes above quantity


    return NextResponse.json({ success: true }, { status: 200, statusText: 'updated succesfully' });
}
