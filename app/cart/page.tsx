'use client'
import { SelectCartLength, SelectCartStatus } from "@app/redux/feautres/cart/cartslice";
import BuynowComponent from "@components/Buttons/BuyNowComponent";
import CartProductComponent from "@components/cartpage/CartProductComponent";
import NoCartItems from "@components/PassiveComponents/NoCartItems";
import { roboto, robotoslab } from "@styles/fonts";
import { GetSessionData } from "@utils/GetClientSession";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Page() {
    const { session, status } = GetSessionData();
    const cartlength = useSelector(SelectCartLength);
    console.log(cartlength, 'cartlength');
    const cartstatus = useSelector(SelectCartStatus);
    const [loadingstatus, setloadingstatus] = useState<typeof cartstatus>();
    useEffect(() => {
        setloadingstatus(cartstatus);
    }, [cartstatus])
    if (status === 'unauthenticated') {
        return <div className="flex items-center justify-center h-48">
            <Link
                href='/loginpage'
                className="bg-orange-100 text-orange-500 py-2 font-[20px] text-[30px] px-2">
                <span>
                    Please Login before
                </span>
            </Link>
        </div>
    }
    return (
        <div>
            <CartProductComponent />
            {cartlength == 0 && loadingstatus === 'idle' && <NoCartItems />
            }
            {cartlength > 0 && <BuynowComponent />}
        </div>
    )
}
