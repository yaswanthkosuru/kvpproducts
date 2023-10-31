import { roboto, robotoslab } from '@styles/fonts';
import { FindCartProducts } from '@utils/findCartProducts';
import React from 'react'

const Paymentinfo = () => {
    const { cartproducts, QuantityMap } = FindCartProducts();
    console.log(cartproducts, QuantityMap);
    var totalprice = 0, deliveryFee = 0;
    const items = cartproducts?.map((product, index) => {
        totalprice += QuantityMap.get(product._id) * parseInt(product.price as string, 10);
        deliveryFee += 40;
        return (
            <div key={index} className='flex flex-col border-b border-dashed border-zinc-400'>
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
                    <span className='font-bold'>
                        &#8377; {parseInt(product.price as string, 10) * QuantityMap.get(product._id)}
                    </span>
                </div>



            </div>
        )
    })
    return (
        <div className={`${roboto.className} ${robotoslab.className}}`}>
            <div className='mx-2 p-4 bg-slate-200/20 text-gray-800'>
                {items}
                <div className='flex justify-between border-t border-t-slate-200 border-spacing-14'>
                    <div>Total price:</div>
                    <div className='font-bold'>&#8377;{totalprice}</div>
                </div>
                <div className='flex justify-between  '>
                    <div>deliver fee:</div>
                    <div className='font-bold'>&#8377;{60}</div>
                </div>
                <div className='flex justify-between'>
                    <div>Payment mode</div>
                    <div className='font-bold'>Cash On Delivery</div>
                </div>
            </div>
        </div>
    )


}

export default Paymentinfo;