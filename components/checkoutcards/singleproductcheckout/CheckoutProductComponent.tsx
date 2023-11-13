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
    const { name, price, description, usersrated, overallrating, imageUrls } = product;

    return (
        <div className=''>

            <div className='grid bg-white  grid-cols-10 '>
                <div className=' col-span-4   rounded-md mr-4'>
                    <CldImage
                        src={imageUrls[0]}
                        width={600}
                        height={600}
                        alt='product image'
                        className='rounded-md h-[150px] border hover:scale-105 transition-transform ease-in-out'
                    />
                </div>
                <div className='col-span-6 grid grid-cols-1 gap-1  my-auto '>
                    <span className="font-medium text-lg ">{name.toUpperCase()}</span>
                    <p className="text-base line-clamp-1" >{description}</p>

                    <span className='text-xl flex items-end'>
                        &#8377;{price}
                    </span>

                </div>

            </div>


        </div>
    )
}

export default CheckoutProductComponent