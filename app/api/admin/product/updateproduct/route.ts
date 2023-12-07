
import { GetSessionAndDB } from '@utils/GetSessionAndDB';
import { ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';
export async function PATCH(request: NextRequest, res: NextResponse) {
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
    const productCollection = Database.collection('products');
    const { imageurls, formData } = await request.json();
    console.log(imageurls, formData, 'formDate');

    const updatedone = await productCollection.updateOne(
        { _id: new ObjectId(formData._id) },
        {
            $set: {
                name: formData.name,
                description: formData.description,
                price: formData.price,
                usersrated: 0,
                overallrating: 0,
                imageUrls: imageurls,
                caloriespercent: 20,
                StockQuantity: formData.StockQuantity,
                units: formData.units,
            }
        }
    )
    console.log('successfully', updatedone);

    return NextResponse.json({ success: true }, { status: 200 });



}