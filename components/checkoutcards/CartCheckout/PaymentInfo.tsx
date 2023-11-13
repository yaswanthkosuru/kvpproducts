import { selectcouponcode } from '@app/redux/feautres/clientside/clientslice';
import { roboto, robotoslab } from '@styles/fonts';
import { FindCartProducts } from '@utils/findCartProducts';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { calculatepriceaftercoupon } from '@utils/Priceaftercoupon';
import { selectaddress } from '@app/redux/feautres/address/addressslice';
import { SelectCartItems } from '@app/redux/feautres/cart/cartslice';
import { SelectOrderStatus, CreateCartOrder } from '@app/redux/feautres/orders/orderslice';
import { AppDispatch } from '@app/redux/store';
import { useRouter } from 'next/navigation';
const Paymentinfo = () => {
    const { cartproducts, QuantityMap } = FindCartProducts();
    const couponcode = useSelector(selectcouponcode);
    console.log(couponcode, 'couponcode');

    console.log(cartproducts, QuantityMap);
    let finalprice = 0;
    const cartitems = useSelector(SelectCartItems);
    const Address = useSelector(selectaddress);
    const Orderstatus = useSelector(SelectOrderStatus);
    const dispatchRedux = useDispatch<AppDispatch>();
    const router = useRouter();

    const items = cartproducts?.map((product, index) => {
        finalprice += QuantityMap.get(product._id) * parseInt(product.price as string, 10);
        const finalproductprice = parseInt(product.price as string, 10) * QuantityMap.get(product._id)

        return (
            <div key={index} className='flex flex-col border-b border-dashed border-zinc-400 gap-2'>
                <div className='flex justify-between'>
                    <div >productName:</div>
                    <div className='font-bold'>{product.name[0].toUpperCase() + product.name.slice(1).toLowerCase()}</div></div>
                <div className='flex justify-between'>
                    Quantity:
                    <span className='font-bold'>
                        {QuantityMap.get(product._id)}
                    </span>
                </div>
                <div className='flex justify-between'>
                    unitprice:
                    <span className='font-bold'>
                        &#8377; {product.price}
                    </span>
                </div>
                <div className='flex justify-between'>
                    totalproductprice:
                    <span className='font-bold text-slate-700 text-xl'>
                        + &#8377; {finalproductprice}
                    </span>
                </div>

            </div>
        )
    })
    let finalpriceaftercoupon = calculatepriceaftercoupon({ price: finalprice, couponcode: couponcode })
    const handleorderclick = async () => {
        if (finalpriceaftercoupon + 60 < 100) {
            alert('minimum order price should be 100 ')
        }
        else if (!Address) {
            alert('please add address');
        } else if (!cartitems || cartitems.length <= 0) {
            alert('please add products');
        } else {
            const amounttobepaid = finalpriceaftercoupon + 60;
            if (confirm(`amount to be paid by you ${amounttobepaid} rupees`)) {
                await dispatchRedux(CreateCartOrder({ couponcode: couponcode }));
                router.push('/payment/success');
            }
        }
    };

    return (
        <div className={`${roboto.className} ${robotoslab.className}} flex justify-center flex-col gap-2`}>
            <div className='mx-2 p-4 bg-slate-200/20 text-gray-600/70'>
                {items}
                <div className='flex justify-between border-t border-t-slate-200 border-spacing-14'>
                    <div>Total price:</div>
                    <div className='font-bold text-slate-700 text-xl'>+ &#8377;{finalprice}</div>
                </div>
                {
                    couponcode != 'none' && (
                        <div className='flex justify-between  '>
                            <div>discount:</div>
                            <div className='font-bold text-green-500/60 text-xl '>-&#8377;{finalprice - finalpriceaftercoupon}</div>
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
                    <div className='font-bold text-yellow-600 text-xl text-[20px]'>&#8377;{finalpriceaftercoupon + 60}</div>
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
    )


}

export default Paymentinfo;