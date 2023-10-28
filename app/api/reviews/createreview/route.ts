import { GetSessionAndDB } from "@utils/GetSessionAndDB";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest, res: NextResponse) {
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
    const AddressCollection = Database.collection('addresses');



}