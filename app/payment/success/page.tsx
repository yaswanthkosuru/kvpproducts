'use client'
import { useEffect } from "react";
import { useRouter } from 'next/navigation'; // Correct import statement for useRouter
import '@styles/globals.css'
import { inter, merriweather, opensans, playfairdisplay, roboto, robotoslab } from "@styles/fonts";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@app/redux/store";
import { getcartitems } from "@app/redux/feautres/cart/cartslice";
const Page = () => {
    const router = useRouter();

    useEffect(() => {

        setTimeout(() => router.push('/profile/myorders'), 2000)
        setTimeout(() => router.refresh(), 2000)
    }, []);


    return (
        <div className="h-96  border-green-200 flex  flex-col justify-center items-center">
            <div className="relative flex  border border-green-200  flex-col justify-center items-center w-full lg:w-[60%] drop-shadow-md bg-white px-5 py-2 gap-4" >
                <div className="success-checkmark">
                    <div className="check-icon">
                        <span className="icon-line line-tip"></span>
                        <span className="icon-line line-long"></span>
                        <div className="icon-circle"></div>
                        <div className="icon-fix"></div>
                    </div>
                </div>
                <div className={` ${inter.className} text-[24px]   font-bold `}>
                    Order Placed Succesfully
                </div>
                <Link
                    href='/profile/myorders'
                    className="text-white bg-green-500 text-[25px]  flex items-center justify-center  px-4 py-1">
                    <span className={`${roboto.className} ${robotoslab.className} `}>
                        OK
                    </span>
                </Link>
            </div>
        </div >

    );
};

export default Page;
