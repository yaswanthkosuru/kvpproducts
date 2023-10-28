import NextAuth, { Profile } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { ConnectToDB } from '@utils/ConnectDB';

export const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ],
    callbacks: {
        async session({ session }) {
            // store the user id from MongoDB to session
            // const sessionUser = await User.findOne({ email: session.user.email });
            // session.user.id = sessionUser._id.toString();

            return session;
        },
        async signIn({ profile }) {
            try {
                const database = await ConnectToDB();
                if (!database) {
                    throw new Error('Could not connect to database');
                }
                if (!profile) {
                    throw new Error('Cannot find Profile');
                }
                const User = database.collection('users');

                // check if user already exists
                const userExists = await User?.findOne({ email: profile.email });

                // if not, create a new document and save user in MongoDB
                if (!userExists && profile) {
                    await User.insertOne({
                        email: profile.email,
                        username: profile.name?.replace(" ", "").toLowerCase(),
                        image: profile.image
                    });
                }
                return true
            } catch (error) {
                console.log(error);
                return false
            }
        },
    }
})

export { handler as GET, handler as POST }