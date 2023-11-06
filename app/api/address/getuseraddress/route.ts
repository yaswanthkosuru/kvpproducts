
import { GetSessionAndDB } from "@utils/GetSessionAndDB";
import { ConnectToDB } from "@utils/ConnectDB";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
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
    const AddressCollection = Database.collection('addresses');
    const { _id } = User;

    const currentaddress = await AddressCollection.findOne({ user_id: _id });
    console.log(currentaddress, 'get address:r');

    return NextResponse.json({ UserAddress: currentaddress })
}