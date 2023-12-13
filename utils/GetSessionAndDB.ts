import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next"
import { handler } from "@app/api/auth/[...nextauth]/route";
import { Session, User } from "next-auth";
import { ConnectToDB } from "@utils/ConnectDB";
import { userType } from "@models/userModel";
import { Db } from "mongodb";
export interface Retype {
    session: Session | null,
    User: userType | null | undefined,
    Database: Db | undefined,
}
export async function GetSessionAndDB(): Promise<Retype> {

    let session: Session | null = await getServerSession(handler);
    try {

        const Database = await ConnectToDB();

        const UserCollection = Database?.collection('users');
        let User = await UserCollection?.findOne<Promise<userType>>({ email: session?.user?.email });


        return { session, User, Database };
    }
    catch (err) {
        console.log(err);
        const Dummyvalue: Retype = {
            session: null,
            User: null,
            Database: undefined
        }
        return Dummyvalue;
    }

}