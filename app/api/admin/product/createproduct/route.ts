
import { GetSessionAndDB } from "@utils/GetSessionAndDB";
import { NextRequest, NextResponse } from "next/server";
import { FormInputType, ProductType } from "@models/ProductModel";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


export async function POST(request: NextRequest, response: NextResponse) {
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
    const data = await request.json()
    console.log(data);

    const { formData, ImageUrls }: { formData: FormInputType, ImageUrls: string[] } = data;
    const ProdctCollection = Database.collection<ProductType>('products');
    const productcreated = await ProdctCollection.insertOne({
        name: formData.name,
        description: formData.description,
        price: formData.price,
        usersrated: 0,
        overallrating: 0,
        stripe_product_id: '',
        stripe_price_id: '',
        imageUrls: ImageUrls,
        caloriespercent: 20,
        StockQuantity: formData.StockQuantity
    })
    console.log(productcreated);
    const createdProduct = await stripe.products.create({
        name: formData.name,
        description: formData.description,
        images: ImageUrls,
        metadata: {
            mongodb_id: productcreated.insertedId,

        },
    });
    const price = await stripe.prices.create({
        product: createdProduct.id,
        currency: 'inr',
        unit_amount: formData.price * 100,
        metadata: {
            mongodb_id: productcreated.insertedId,
        },
    });
    const productupdate = await ProdctCollection.updateOne(
        { _id: productcreated.insertedId },
        {
            $set: {
                stripe_price_id: price.id,
                stripe_product_id: createdProduct.id
            }
        }
    )
    console.log(productupdate, 'inside route createproduct')
    return NextResponse.json({ success: true })


}
