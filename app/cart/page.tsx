'use client'
import BuynowComponent from "@components/Buttons/BuyNowComponent";
import CartProductComponent from "@components/ProductCards/CartProductComponent";
import { GetSessionData } from "@utils/GetClientSession";

export default function Page() {
    const { session, status } = GetSessionData();
    if (status === 'unauthenticated') {
        return <div>
            <button className="ripple">Login first to see your products</button>
        </div>
    }
    return (
        <div>
            <CartProductComponent />
            <BuynowComponent />
        </div>
    )
}
