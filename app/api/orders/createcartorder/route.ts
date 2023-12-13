
import { cartproductType } from "@CustomTypes/ApiSchemaType";
import { addressType } from "@models/addressModel";
import { cartType } from "@models/cartModel";
import { orderType, orderedproductsType } from "@models/orderModel";
import { productType } from "@models/product";
import { userType } from "@models/userModel";
import { GetSessionAndDB } from "@utils/GetSessionAndDB";
import { Db, ObjectId, Document } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
async function calculateDiscount({ cartprice, coupon, Database }: { cartprice: number, coupon: string, Database: Db }) {
    console.log(coupon);
    if (coupon === 'FirstThreeOrders') {

        const eightyoff = Math.ceil(cartprice * 0.6);
        return Math.min(eightyoff, 100);
    }
    else if (coupon === 'TryYourLuck') {
        const luckoff = Math.floor(Math.random() * (45 - 15 + 1)) + 10;
        const discountbyluckoff = Math.ceil(cartprice * (luckoff / 100));
        console.log(discountbyluckoff);

        return Math.min(discountbyluckoff, 80);
    }
    return 0;
}
async function calculatecartprice({ Database, User }: { Database: Db, User: userType }) {
    const cartCollection = Database.collection<orderType>('carts');
    const cartproducts: cartproductType = await cartCollection.aggregate([
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
    let cartprice = 0
    console.log(cartproducts);

    cartproducts.forEach((p) => cartprice += p.price * p.cartquantity);

    return { cartprice, cartproducts };

}
async function getAddress({ Database, User }: { Database: Db, User: userType }) {
    const AddressCollection = Database.collection<addressType>('addresses');
    const address = await AddressCollection.findOne({
        user_id: User._id
    })
    return address;

}
async function deleteCartItems({ Database, User }: { Database: Db, User: userType }) {

    const cartCollection = Database.collection<cartType>('carts');
    await cartCollection.deleteMany({
        user_id: User._id
    })
}
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
    const { coupon, price }: { coupon: string, price: number } = await req.json();

    const { cartprice, cartproducts } = await calculatecartprice({ Database, User })
    const discount = await calculateDiscount({ cartprice, coupon, Database })
    const serverprice = cartprice - discount + 40;
    if (price != serverprice) {
        console.log(price, serverprice, cartprice);

        return NextResponse.json({ msg: 'Error price mismatch' }, { status: 403, statusText: ' price not match' });
    }
    //create a order
    const order: orderedproductsType[] = [];
    cartproducts.forEach((p) => order.push({
        product: p,
        orderstatus: 'ordered',
    }));
    const address: addressType = await getAddress({ Database: Database, User: User });
    const ordersCollection = Database.collection<orderType>('orders');
    cartproducts.forEach((p) => {
        if (p.stockQuantity - p.cartquantity < 0) {
            return NextResponse.json({ msg: 'out of stock' }, { status: 403, statusText: 'some product out of stock' });
        }
    })
    const createorder = await ordersCollection.insertOne({
        user_id: User._id,
        orderproducts: order,
        time: new Date(),
        address: address,
        originalprice: cartprice,
        discountedprice: serverprice,
        coupon: coupon,
        orderstatus: 'ordered',
        ordertype: "COD"
    })
    console.log(createorder, 'order created succesfuuly');
    const productCollection = Database.collection<productType>('products');
    for await (const p of cartproducts) {
        await productCollection.findOneAndUpdate(
            { _id: new ObjectId(p._id), stockQuantity: { $gte: 1 } },
            {
                $inc: {
                    stockQuantity: -1,
                }
            }
        )
    }

    await deleteCartItems({ Database, User })

    return NextResponse.json({ msg: createorder }, { status: 200, statusText: ' succed order created' });



}