'use client'
import React, { useEffect, useState } from 'react'
import { CldImage } from 'next-cloudinary';
import { SelectCartItems, SelectCartStatus, deletecartitem, getcartitems, updatecart } from '@app/redux/feautres/cart/cartslice';

import { useSelector } from 'react-redux';
import { roboto, robotoslab } from '@styles/fonts';
import '@styles/globals.css'
import ProductsPrefetch from '@components/Skeletons/ProductsPrefetch';

import Link from 'next/link';

import CartQuantityChange from '@components/Buttons/CartQuantityChange';

const CartProductComponent = () => {

  const cartproducts = useSelector(SelectCartItems);
  console.log(cartproducts);


  const [LoadingStatus, setLoadingStatus] = useState<'idle' | 'pending' | 'rejected'>('idle');
  const status = useSelector(SelectCartStatus);
  useEffect(() => {
    setLoadingStatus(status)
  }, [status]);

  if (LoadingStatus === 'pending' && !cartproducts?.length) {
    return <ProductsPrefetch />
  }
  const productCards = cartproducts?.map((product, index) => {
    const { name, description, imageUrls, price, _id, overallrating, usersrated, units, cartquantity } = product;



    return (
      <div
        key={index}
        className={`${roboto.className} ${robotoslab.className}`}
      >
        {/* mobileversion */}
        <div className='sm:hidden block'>
          <div className='grid bg-white  grid-cols-10 '>
            <div className=' col-span-4   rounded-md mr-4'>
              <Link href={`/product/${_id}`}>
                <CldImage
                  src={imageUrls[0]}
                  width={600}
                  height={600}
                  alt='product image'
                  className='rounded-md h-[150px] border'
                />
              </Link>
            </div>

            <div className='col-span-6 grid grid-cols-1 gap-1  my-auto '>
              <span className="font-medium text-[15px] ">{name.toUpperCase()}</span>
              <p className="text-base line-clamp-1" >{description}</p>
              <span className='text-xl'> &#8377;{price}
                <span className='text-base'>/{units}</span>
              </span>
              <CartQuantityChange product={product} cartquantity={cartquantity} />



            </div>

          </div>




        </div>
        {/* desktop version */}
        <div
          className={`hidden sm:block  m-4 p-4 bg-white border rounded-lg`}
        >
          <Link href={`/product/${_id}`}>
            <div className="">
              <div className='w-full relative h-40'>
                <CldImage
                  src={imageUrls[0]}
                  fill
                  sizes=''
                  alt='product image'
                  className=' '
                />
              </div>
            </div>
            <div className={`mt-4 `}>
              <span className='font-medium text-md line-clamp-1'>{name.toUpperCase()}</span>
              <p className='line-clamp-1'>{description}</p>
              <div className='flex  gap-2 justify-between'>
                <span>
                  <span className='text-xl'> &#8377;{price}</span>
                  /{units}
                </span>
              </div>
            </div>
          </Link>
          <CartQuantityChange product={product} cartquantity={cartquantity} />
        </div>
      </div >


    );
  });

  return (
    <div>

      <strong className={`${roboto.className} ${robotoslab.className} font-bold`}>cart items</strong>
      <div className='grid grid-flow-row m:grid-cols-3 gap-4 mb-4  mx-auto   justify-center items-center'>
        {productCards}
      </div>
    </div>

  )
}

export default CartProductComponent