import { OrderType } from "@models/Order_Model";
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
    const OrdersCollection = Database.collection<OrderType>('orders');
    const Order = await OrdersCollection.find({
        user_id: new ObjectId(User._id),
    }).toArray();
    console.log(Order, 'orderdetails');
    //retrun reverse order

    return NextResponse.json({ order_details: Order.reverse() }, { status: 200, statusText: 'success' });

}