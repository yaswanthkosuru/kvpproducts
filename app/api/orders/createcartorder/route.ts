
import { AddressType } from "@models/Address_Model";
import { CartType } from "@models/Cart_Model";
import { ItemType, OrderType } from "@models/Order_Model";
import { ProductType } from "@models/ProductModel";
import { GetSessionAndDB } from "@utils/GetSessionAndDB";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest, res: NextResponse) {
    console.log('inside post create order');

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
    const { couponcode } = await req.json();
    const CartCollection = Database.collection<CartType>('carts');

    const usercart = await CartCollection.findOne({
        user_id: User._id,
    })

    if (!usercart) {
        return NextResponse.json({}, { status: 400, statusText: 'unable to findcart items ' });
    }

    const AddressCollection = Database.collection<AddressType>('addresses');
    const currentaddress = await AddressCollection.findOne({ user_id: User._id });

    if (!usercart) {
        return NextResponse.json({}, { status: 400, statusText: 'unable to Address ' });
    }

    const ProductCollection = Database.collection<ProductType>('products');
    const products = await ProductCollection.find({}).toArray();

    if (!usercart) {
        return NextResponse.json({}, { status: 400, statusText: 'product unavailible' });
    }
    var overallcost = 60;

    for (const item of usercart.items) {
        const product = products.find(p => {
            console.log(p._id, item.product_id, 'inside find');
            return p._id.toString() === item.product_id.toString()
        });
        console.log('r:createorder', product);
        if (product) {
            const price = parseInt(product.price as string, 10);
            overallcost += price * item.quantity;
        }
    }
    const items = usercart.items;
    const orderitems = items.map(item => {
        const product = products.find(p => {
            console.log(p._id, item.product_id, 'inside find');
            return p._id.toString() === item.product_id.toString()
        });
        return {
            ...item,
            price: parseInt(product.price as string),
        }
    })
    const OrderCollection = Database.collection<OrderType>('orders');
    const createdorder = await OrderCollection.insertOne(
        {
            user_id: new ObjectId(User._id),
            items: orderitems,
            time: new Date(),
            address: {
                street: currentaddress.street,
                city: currentaddress.city,
                state: currentaddress.state,
                postalCode: currentaddress.postalCode,
                phoneNumber: currentaddress.phoneNumber,
            },
            amount: overallcost,
            ordertype: 'cod',
            orderstatus: "orderbooked"
        }
    )
    await CartCollection.deleteOne({
        _id: usercart._id
    })
    console.log(createdorder, 'succesfully created order');

    return NextResponse.json({ IsOrderSuccess: 'success' }, { status: 200, statusText: 'success' });

}