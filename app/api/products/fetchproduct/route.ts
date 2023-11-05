import { GetSessionAndDB } from "@utils/GetSessionAndDB";
import { NextRequest, NextResponse } from "next/server"
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
    console.log(product_id, 'r,fetchproduct');

    const ProductCollection = Database.collection('products');
    const product = await ProductCollection.findOne({
        _id: product_id
    })
    console.log(product, 'r fetchsingleproduct');
    return NextResponse.json({ product: product }, { status: 500 })

}