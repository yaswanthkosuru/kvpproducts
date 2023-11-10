
import { AddressType } from "@models/Address_Model";
import { OrderType } from "@models/Order_Model";
import { ProductType } from "@models/ProductModel";
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
    const data = await req.json();
    const { product_id } = data;
    if (!product_id) {
        return NextResponse.json({ msg: 'invalid request' }, { status: 401, statusText: 'invalid request' });
    }
    const ProductCollection = Database.collection<ProductType>('products');
    const products = await ProductCollection.find({}).toArray();

    const AddressCollection = Database.collection<AddressType>('addresses');
    const currentaddress = await AddressCollection.findOne({ user_id: User._id });



    const OrderCollection = Database.collection<OrderType>('orders');

    const product = products.find(p => p._id.toString() === product_id)
    console.log(product, product_id, data, 'r:createorder');

    if (!product) {
        return NextResponse.json({ msg: 'invalid request' }, { status: 401, statusText: 'invalid request' });
    }
    const price = parseInt(product.price as string) + 60;

    const createdorder = await OrderCollection.insertOne(
        {
            user_id: new ObjectId(User._id),
            items: [{
                product_id: new ObjectId(product_id),
                quantity: 1,
                price: parseInt(product.price as string),
            }],
            time: new Date(),
            address: {
                street: currentaddress.street,
                city: currentaddress.city,
                state: currentaddress.state,
                postalCode: currentaddress.postalCode,
                phoneNumber: currentaddress.phoneNumber,
            },
            amount: price,
            ordertype: 'cod',
            orderstatus: "orderbooked"
        }
    )
    return NextResponse.json({ createdorder: true });

}