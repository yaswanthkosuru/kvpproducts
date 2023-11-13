import { selectcouponcode } from '@app/redux/feautres/clientside/clientslice';
import { createOrder } from '@app/redux/feautres/orders/orderslice';
import { selectallproducts } from '@app/redux/feautres/products/product-slice';
import { AppDispatch } from '@app/redux/store';
import { roboto, robotoslab } from '@styles/fonts';
import { calculatepriceaftercoupon } from '@utils/Priceaftercoupon';
import { useParams, useRouter } from 'next/navigation'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const PaymentInfo = () => {
    const { product_id } = useParams();
    console.log(product_id);
    const products = useSelector(selectallproducts);
    const product = products.find((product) => product._id.toString() === product_id);
    console.log(product, 'product find', products);
    const couponcode = useSelector(selectcouponcode);
    const dispatchRedux = useDispatch<AppDispatch>();
    const router = useRouter();
    const handleorderclick = async () => {
        if (confirm('Are you sure you want to order')) {
            await dispatchRedux(createOrder({ product_id: product_id as string, couponcode: couponcode }));
        }
        router.push('/payment/success');
    }
    if (!product) {
        return <div></div>
    }
    const { name, price } = product;
    let priceint = parseInt(price as string)
    const Priceaftercoupon = calculatepriceaftercoupon({ price: priceint, couponcode: couponcode })
    return (
        <div>PaymentInfo
            <div className={`${roboto.className} ${robotoslab.className}} flex justify-center flex-col gap-2`}>
                <div className='mx-2 p-4 bg-slate-200/20 text-gray-600/70'>
                    <div className='flex justify-between border-t border-t-slate-200 border-spacing-14'>
                        <div>Total price:</div>
                        <div className='font-bold text-slate-700 text-xl'>+ &#8377;{price}</div>
                    </div>
                    {
                        couponcode != 'none' && (
                            <div className='flex justify-between  '>
                                <div>discount:</div>
                                <div className='font-bold text-green-500/60 text-xl '>-&#8377;{priceint - Priceaftercoupon}</div>
                            </div>
                        )
                    }
                    <div className='flex justify-between  '>
                        <div>deliver fee:</div>
                        <div className='font-bold text-slate-700 text-xl'>+ &#8377;{60}</div>
                    </div>
                    <hr />
                    <div className='flex justify-between  '>
                        <div>Final amount</div>
                        <div className='font-bold text-yellow-600 text-xl text-[20px]'>&#8377;{Priceaftercoupon + 60}</div>
                    </div>


                    <div className='flex justify-between'>
                        <div>Payment mode</div>
                        <div className='font-bold  text-yellow-600 text-xl'>Cash On Delivery</div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button onClick={handleorderclick} className='buynow-button w-full mt-4'>Order now</button>
                </div>
            </div>
        </div>
    )
}

export default PaymentInfo