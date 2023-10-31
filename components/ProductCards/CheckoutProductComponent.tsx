import { updatecart } from '@app/redux/feautres/cart/cartslice'
import { selectallproducts } from '@app/redux/feautres/products/product-slice'
import { AppDispatch } from '@app/redux/store'
import { roboto, robotoslab } from '@styles/fonts'
import { CldImage } from 'next-cloudinary'
import { useParams } from 'next/navigation'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
type props = {
    product_ids: string[],
}
const CheckoutProductComponent = () => {
    const products = useSelector(selectallproducts)
    const { product_id } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const product = products.find(p => p._id == product_id);
    const handleupdatecart = ({ p_id, increment }: { p_id: string, increment: boolean }) => {
        dispatch(updatecart({ product_id: p_id, increment }));
    }
    return (
        <div className={`${roboto.className} ${robotoslab.className}`} >
            <div className='grid grid-cols-9 '>
                <div className='col-span-4 mr-2 h-28 max-h-28 bg-slate-200  relative'>
                    <CldImage
                        src={product.imageUrls[0]}
                        alt='none'
                        fill={true}
                        className='w-full h-full'
                    ></CldImage>
                </div>
                <div className='col-span-5'>
                    {product.name}
                    <div className=''>
                        <div className=' line-clamp-2'>
                            {product.description}
                        </div>
                    </div>
                    <span>  Price:</span>
                    <span className='font-bold'>
                        &#8377; {parseInt(product.price as string)}
                    </span>
                    <div className=' text-lg '>
                        delivery fee:&#8377;60
                    </div>

                </div>
            </div>

        </div>
    )
}

export default CheckoutProductComponent