'use client'
import Link from "next/link";
import Head from "next/head";
import { inter, roboto } from '@styles/fonts'
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import '@styles/globals.css';
export default function Page() {
    // const { data: session, status } = useSession();
    return (
        <div>
            <div className={`   ${roboto.className} `}>
                <div className=" flex flex-col  bg-white w-auto h-auto drop-shadow-lg rounded-md  gap-2 py-8 ">
                    <div className="linkbuttonprofile ">
                        <Link
                            rel=""
                            href='/profile/myorders'
                            prefetch={false}

                        >
                            orders
                        </Link>
                    </div>
                    <div className="linkbuttonprofile ">

                        <Link
                            prefetch={false}

                            href='/admin'
                        >
                            Seller account
                        </Link>
                    </div>
                    <div className=" linkbuttonprofile" >

                        <Link
                            prefetch={false}

                            href='/profile/manageaddress'
                        >
                            Manage Address
                        </Link>
                    </div>
                    <div className=" linkbuttonprofile" >

                        <Link
                            prefetch={false}

                            href='/profile/gauranteepolicy'
                        >
                            Dry Leaves Guarantee
                        </Link>
                    </div>
                    <div className=" linkbuttonprofile" >

                        <Link

                            target="blank"
                            href='https://merchant.razorpay.com/policy/MUJ51f2W1R5Cpn/'
                        >
                            Privacypolicy Cancellation and more..
                        </Link>
                    </div>

                    <div className="linkbuttonprofile">
                        <div
                            onClick={() => { signOut(); }}
                            className=""

                        >  SignOut
                        </div>
                    </div>
                </div>
            </div>

        </div >

    )
}

