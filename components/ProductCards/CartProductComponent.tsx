'use client'
import React, { useEffect, useState } from 'react'
import { ProductType } from '@models/ProductModel';
import { CldImage } from 'next-cloudinary';
import { SelectCartItems, SelectCartStatus, getcartitems, updatecart } from '@app/redux/feautres/cart/cartslice';
import { selectallproducts } from '@app/redux/feautres/products/product-slice';
import { AppDispatch } from '@app/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { playfairdisplay, roboto, robotoslab } from '@styles/fonts';
import '@styles/globals.css'
import { FindCartProducts } from '@utils/findCartProducts';
import ProductsPrefetch from '@components/Skeletons/ProductsPrefetch';
import DisableandLoadingComponent from '@components/Loading';

const CartProductComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cartproducts, QuantityMap } = FindCartProducts();
  console.log(cartproducts, 'cart page');
  const handleupdatecart = ({ p_id, increment }: { p_id: string, increment: boolean }) => {
    dispatch(updatecart({ product_id: p_id, increment }));
  }
  const [LoadingStatus, setLoadingStatus] = useState<'idle' | 'Loading' | 'rejected'>();
  const status = useSelector(SelectCartStatus);
  useEffect(() => {
    setLoadingStatus(status)
  }, [status]);
  const styledproduucts = cartproducts.map((product, index) => {
    return (
      <div className={`${roboto.className} ${robotoslab.className}`} key={index}>
        <div className='grid grid-cols-9 '>
          <div className='col-span-4 mr-2 h-28 max-h-28 bg-red-200  relative'>
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
            <span>  OverallPrice:</span>
            <span className='font-bold'>
              &#8377; {product.price * QuantityMap.get(product._id)}
            </span>
            <div className='flex gap-2 justify-start items-center'>
              <span className='font-medium'>quantity</span>
              <div className='flex gap-2 border border-gray-600  bg-gradient-to-r from-rose-100 to-teal-100 rounded-xl text-white'>
                <button
                  className='font-bold text-[20px]  bg-white rounded-xl text-black  px-3'
                  onClick={() => handleupdatecart({ p_id: product._id as string, increment: false })}
                >
                  -</button>
                <div className='text-black font-bold flex items-center'>
                  {QuantityMap.get(product._id)}
                </div>
                <button
                  onClick={() => handleupdatecart({ p_id: product._id as string, increment: true })}
                  className='font-bold bg-white text-[18px] rounded-xl text-black px-3
                  '>+</button>
              </div>
            </div>
          </div>
        </div>


      </div>
    )
  })
  console.log(LoadingStatus, 'cartcomp');
  if (LoadingStatus === 'Loading' && !cartproducts.length) {
    return <ProductsPrefetch />
  }

  return (
    <div>
      {LoadingStatus === 'Loading' && <DisableandLoadingComponent />}
      <div className='grid grid-flow-row gap-4 mb-4  mx-auto max-w-xl  justify-center items-center'>
        {styledproduucts}

      </div>
    </div>

  )
}

export default CartProductComponent