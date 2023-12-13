
import { GetSessionAndDB } from "@utils/GetSessionAndDB";
import { NextRequest, NextResponse } from "next/server";

import { orderType } from "@models/orderModel";

export async function POST(request: NextRequest, response: NextResponse) {
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
    const OrdersCollection = Database.collection<orderType>('orders');


    return NextResponse.json({ order_details: '' });
}