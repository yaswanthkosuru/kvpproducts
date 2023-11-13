import { SelectOrders, getorders } from "@app/redux/feautres/orders/orderslice"
import { AppDispatch } from "@app/redux/store";
import { GetSessionData } from "@utils/GetClientSession";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

type props = {
    price: number
    units: string
}
export function PriceComponent({ price, units }: props) {
    const orders = useSelector(SelectOrders);
    const dispatch = useDispatch<AppDispatch>();
    const { status } = GetSessionData()
    useEffect(() => {
        if (!orders && status === 'authenticated') {
            dispatch(getorders())
        }
    }, []);
    var offerprice = price;
    let OrderLength = 0;
    orders?.forEach((ord) => OrderLength += ord.items.length);
    //price based on orders
    if (OrderLength < 3) {
        var offerprice = 0.6 * price;
        if (offerprice > 80) {
            offerprice = price - 80;
        }
    }
    if (!orders || OrderLength < 3) {
        return (
            <div>
                <span className="flex items-center gap-1">
                    <span> &#8377;{offerprice}</span>
                    <span className='text-sm text-gray-700 '>
                        &nbsp; per {units}
                    </span>
                    <span className="text-gray-400 text-[12px]">m.r.p :</span>
                    <span className="line-through decoration-rose-600 text-base text-gray-400">
                        &#8377;{price}
                    </span>
                </span>
                <div className="text-sm text-gray-400">
                    coupon avalible during checkout
                </div>
            </div>
        )
    }
    return (
        <span className="flex items-center">
            <span> &#8377;{price}</span>
            <span className='text-sm text-gray-700 '>
                &nbsp; /- {units}
            </span>

        </span>
    )

}