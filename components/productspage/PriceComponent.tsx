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
    return (
        <span className="flex items-center">
            <span> &#8377;{price}</span>
            <span className='text-sm text-gray-700 '>
                &nbsp; /- {units}
            </span>
        </span>
    )

}