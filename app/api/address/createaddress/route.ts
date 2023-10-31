import { handler } from "@app/api/auth/[...nextauth]/route";
import { AddressType } from "@models/Address_Model";
import { GetSessionAndDB } from "@utils/GetSessionAndDB";
import { ConnectToDB } from "@utils/ConnectDB";
import { Session, getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { Filter, ObjectId, UpdateFilter } from "mongodb";

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
    const AddressCollection = Database.collection<AddressType>('addresses');
    const { formData, update }: { formData: AddressType, update: boolean } = await req.json();
    console.log(formData, update, 'r create address');

    if (update) {
        const filter: Filter<AddressType> = {
            user_id: new ObjectId(User._id)
        }
        const update: UpdateFilter<AddressType> = {
            $set: {
                street: formData.street,
                city: formData.city,
                state: formData.state,
                postalCode: formData.postalCode,
                phoneNumber: formData.phoneNumber,
            }
        }
        try {
            await AddressCollection.updateOne(
                filter,
                update
            )
            return NextResponse.json({ sucess: true }, { status: 200 });
        }
        catch (error) {
            console.error('mongo db error: ' + error);
            return NextResponse.json({ sucess: false }, { status: 500 });
        }

    }
    else {
        const InsertDoc = {
            ...formData,
            user_id: new ObjectId(User._id)
        }
        AddressCollection.insertOne(InsertDoc);
        return NextResponse.json({ sucess: false }, { status: 200, statusText: 'insert successfully' });

    }

}
