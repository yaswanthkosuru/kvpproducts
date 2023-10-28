import { NextRequest, NextResponse } from "next/server";
import { ConnectToDB } from "@utils/ConnectDB";
import { GetSessionAndDB } from "@utils/GetSessionAndDB";
import { CartType } from "@models/Cart_Model";
import { data } from "autoprefixer";
import { Filter, ObjectId, UpdateFilter } from "mongodb";

export async function POST(req: NextRequest, res: NextResponse) {
    // console.log('called Post inside create cart');
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
    const { p_id } = response;
    console.log(p_id, 'route crete cart');

    const CartCollection = Database.collection<CartType>('carts');
    const quantity = 1
    //find cart collection
    //if not cart collection then insert one
    //if cart and not product then add product+quantity
    //if cart and product do nothing
    const UserCart = await CartCollection.findOne(
        { user_id: User._id }
    )

    if (!UserCart) {
        const user_id = new ObjectId(User._id);
        const product_id = new ObjectId(p_id);
        const currentcart: CartType = {
            user_id: user_id,
            items: [{
                product_id: product_id,
                quantity: 1
            }]
        }
        try {
            CartCollection.insertOne(
                currentcart
            )
        }
        catch (error) {
            console.error(error);
            return NextResponse.json({ error: error }, { status: 500, statusText: 'mongodb error' })
        }
    }
    else {
        const item = UserCart.items.find(item => item.product_id == p_id);
        if (!item) {
            const user_id = new ObjectId(User._id);
            const product_id = new ObjectId(p_id);
            const filter: Filter<CartType> = { user_id: user_id }
            const updatefilter: UpdateFilter<CartType> =
            {
                $push: {
                    'items': {
                        product_id: new ObjectId(product_id),
                        quantity: 1,
                    }
                }
            }
            try {
                await CartCollection.updateOne(
                    filter,
                    updatefilter
                )
            } catch (error) {
                return NextResponse.json({ error: error }, { status: 500, statusText: 'mongodb error' })

            }

        }

    }
    return NextResponse.json({ msg: 'success' }, { status: 200 });
} 