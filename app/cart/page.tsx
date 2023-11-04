'use client'
import { SelectCartLength } from "@app/redux/feautres/cart/cartslice";
import BuynowComponent from "@components/Buttons/BuyNowComponent";
import CartProductComponent from "@components/ProductCards/CartProductComponent";
import { roboto, robotoslab } from "@styles/fonts";
import { GetSessionData } from "@utils/GetClientSession";
import { useSelector } from "react-redux";

export default function Page() {
    const { session, status } = GetSessionData();
    const cartlength = useSelector(SelectCartLength);
    if (status === 'unauthenticated') {
        return <div>
            <button className="ripple">Login first to see your products</button>
        </div>
    }
    return (
        <div>
            <CartProductComponent />
            {cartlength == 0 && <div className="flex items-center justify-center h-screen">
                <div className="bg-orange-100 text-orange-500 py-10 font-[30px] text-[30px] px-5">
                    <span className={`${roboto.className} ${robotoslab.className}`}>
                        NO CART ITEMS AVAILIBLE
                    </span>

                </div>
            </div>}
            {cartlength > 0 && <BuynowComponent />}
        </div>
    )
}
