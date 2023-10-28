import { GetSessionAndDB } from "@utils/GetSessionAndDB";
import { NextRequest, NextResponse } from "next/server"
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