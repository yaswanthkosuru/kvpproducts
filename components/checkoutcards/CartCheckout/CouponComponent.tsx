import { selectcouponcode, setcoupon } from '@app/redux/feautres/clientside/clientslice';
import { SelectOrders, getorders } from '@app/redux/feautres/orders/orderslice'
import { AppDispatch } from '@app/redux/store';
import React, { useEffect, useState } from 'react'
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
    const couponcode = useSelector(selectcouponcode);
    console.log(couponcode, 'from redux');

    const handleclick = (e) => {
        const t = e.target as HTMLInputElement;
        console.log(t.value, isNotEligible, 'changed');
        if (isNotEligible) {
            dispatch(setcoupon('none'));
        }
        else {

            dispatch(setcoupon(t.value));
        }
    }
    const [selectedOption, setSelectedOption] = useState(null);

    const couponcodes = [
        { name: 'FirstThreeOrders', desc: '60%off Upto 80 rupees' },
        { name: 'WinIndia', desc: '20% off Upto 80 rupees' },
        { name: 'none', desc: 'procced without coupon' }
    ]
    return (
        <div

            className='flex justify-center '>
            <div className='bg-slate-100 rounded-md px-4 grid gap-4 py-6'>
                {
                    couponcodes.map(coupon => {

                        return (
                            <div
                                key={coupon.name}
                                className='flex items-center gap-2'>
                                <input
                                    checked={couponcode === coupon.name}
                                    onChange={handleclick}
                                    value={coupon.name}
                                    type='radio'
                                    className='w-4 h-6'
                                />

                                <div className='grid'>
                                    <span className='text-gray-400'>
                                        couponcode:{coupon.name}
                                    </span>
                                    <span>
                                        {coupon.desc}
                                    </span>
                                    {isNotEligible && coupon.name != 'none' && <span className='text-red-500'> you are not elgible for these coupon</span>}
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