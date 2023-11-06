import { SelectOrders } from '@app/redux/feautres/orders/orderslice'
import React from 'react'
import { useSelector } from 'react-redux'

const CouponComponent = () => {
    const orders = useSelector(SelectOrders);
    let c = 0;
    orders.forEach((order) => {
        c += order.items.length;
    })
    return (
        <div>
            {c <= 3 && <span>coupon component1</span>}
        </div>
    )
}

export default CouponComponent