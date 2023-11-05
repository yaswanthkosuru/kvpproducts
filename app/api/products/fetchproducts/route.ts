import { NextRequest, NextResponse } from "next/server"
import { ConnectToDB } from "@utils/ConnectDB";
// import { ProductType } from '@models/Product_Model';

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const database = await ConnectToDB();

        if (!database) {
            return NextResponse.json({ msg: 'Error connecting to Database' }, { status: 401, statusText: 'userid not found ' })
        }
        const Product = database.collection('products');
        const products = await Product.find({}).limit(100).toArray(); // Use toArray() to get the documents as an array.
        // console.log(products);
        return new NextResponse(JSON.stringify({ products }), { status: 200, headers: { 'Content-Type': 'application/json' } });

    } catch (error) {
        console.error(error);
        return new NextResponse("Database connection error", { status: 500 });
    }
}
