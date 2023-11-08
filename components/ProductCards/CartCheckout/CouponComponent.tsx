import { SelectOrders, getorders } from '@app/redux/feautres/orders/orderslice'
import { AppDispatch } from '@app/redux/store';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CouponComponent = () => {
    const orders = useSelector(SelectOrders);
    let OrderLength = 0;
    orders?.forEach((order) => {
        OrderLength += order.items.length;
    })
    const isNotEligible = OrderLength >= 3;
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        if (!orders) {
            dispatch(getorders());
        }
    }, []);
    console.log(OrderLength, orders, 'coupons');
    const handleclick = (e) => {
        const t = e.target as HTMLInputElement;
        console.log(t.value);
    }
    const couponcodes = [{ name: 'FirstThreeOrders', desc: '60%off Upto 80 rupees' },
    { name: 'WinIndia', desc: '20% off Upto 80 rupees' }]
    return (
        <div className='flex justify-center '>
            <div className='bg-slate-100 rounded-md px-4 grid gap-4 py-6'>
                {
                    couponcodes.map(coupon => {
                        return (
                            <div className='flex items-center gap-2'>

                                <input
                                    onChange={handleclick}
                                    value={coupon.name}
                                    type='checkbox'
                                    className='w-4 h-6'
                                />

                                <div className='grid'>
                                    <span className='text-gray-400'>
                                        couponcode:{coupon.name}
                                    </span>
                                    <span>
                                        {coupon.desc}
                                    </span>
                                    {isNotEligible && <span className='text-red-500'> you are not elgible for these coupon</span>}
                                </div>
                            </div>

                        )
                    })
                }
            </div>

        </div>
    )
}

export default CouponComponent